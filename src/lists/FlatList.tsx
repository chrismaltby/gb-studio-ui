import React, {
  CSSProperties,
  DOMElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";
import { ThemeInterface } from "../theme/ThemeInterface";
import { ListItem } from "./ListItem";

export interface FlatListItem {
  id: string;
  name: string;
}

interface RowProps {
  readonly index: number;
  readonly style: CSSProperties;
  readonly data: {
    readonly items: FlatListItem[];
    readonly selectedId: string;
    readonly setSelectedId: (value: string) => void;
    readonly renderItem: (props: {
      selected: boolean;
      item: FlatListItem;
    }) => React.ReactNode;
  };
}

export interface FlatListProps {
  readonly width: number;
  readonly height: number;
  readonly items: FlatListItem[];
  readonly selectedId: string;
  readonly setSelectedId: (id: string) => void;
  readonly children?: (props: {
    selected: boolean;
    item: FlatListItem;
  }) => React.ReactNode;
  readonly theme?: ThemeInterface;
}

const Wrapper = styled.div`
  background: #eee;
  /* padding: 0 5px; */
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Row: React.FC<RowProps> = ({ index, style, data }) => {
  const item = data.items[index];
  if (!item) {
    return <div style={style} />;
  }
  return (
    <div
      style={style}
      onClick={() => data.setSelectedId(item.id)}
      data-id={item.id}
    >
      <ListItem tabIndex={-1} data-selected={data.selectedId === item.id}>
        {data.renderItem
          ? data.renderItem({ item, selected: data.selectedId === item.id })
          : item.name}
      </ListItem>
    </div>
  );
};

export const FlatList: React.FC<FlatListProps> = ({
  items,
  selectedId,
  setSelectedId,
  width,
  height,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const list = useRef<List>(null);

  const selectedIndex = items.findIndex((item) => item.id === selectedId);

  const handleKeys = (e: KeyboardEvent) => {
    if (!hasFocus) {
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const currentIndex = items.findIndex((item) => item.id === selectedId);
      const nextIndex = currentIndex + 1;
      const nextItem = items[nextIndex];
      if (nextItem) {
        setSelectedId(nextItem.id);
        setFocus(nextItem.id);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const currentIndex = items.findIndex((item) => item.id === selectedId);
      const nextIndex = currentIndex - 1;
      const nextItem = items[nextIndex];
      if (nextItem) {
        setSelectedId(nextItem.id);
        setFocus(nextItem.id);
      }
    } else {
      handleSearch(e.key);
    }
  };

  const handleSearch = (key: string) => {
    const search = key.toLowerCase();
    const index = selectedIndex + 1;
    let next = items.slice(index).find((node) => {
      const name = String(node.name).toLowerCase();
      return name.startsWith(search);
    });
    if (!next) {
      next = items.slice(0, index).find((node) => {
        const name = String(node.name).toLowerCase();
        return name.startsWith(search);
      });
    }
    if (next) {
      setSelectedId(next.id);
      setFocus(next.id);
    }
  };

  const setFocus = (id: string) => {
    if (ref.current) {
      const el = ref.current.querySelector("[data-id=\"" + id + "\"]");
      if (el) {
        (el as HTMLDivElement).focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  });

  useEffect(() => {
    /**
     * enables scrolling on key down arrow
     */
    if (selectedIndex >= 0 && list.current !== null) {
      list.current.scrollToItem(selectedIndex);
    }
  }, [selectedIndex, items, list]);

  return (
    <Wrapper
      ref={ref}
      role="listbox"
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      tabIndex={0}
      style={{width, height}}
    >
      <List
        ref={list}
        width="100%"
        height={height}
        itemCount={items.length}
        itemSize={25}
        itemData={{
          items,
          selectedIndex,
          selectedId,
          setSelectedId,
          focus,
          renderItem: children,
        }}
      >
        {Row}
      </List>
    </Wrapper>
  );
};
