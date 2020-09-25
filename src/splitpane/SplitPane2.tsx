import React, { Component, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useComponentSize from "@rehooks/component-size";
import { last } from "lodash";

const COLLAPSED_SIZE = 50;

interface SplitPaneProps {
  sizes: number[];
  minSize: number;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  background: #ccc;
  overflow: hidden;
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  background: #666;
  width: 100%;
  user-select: none;
  cursor: row-resize;

  :hover {
    background: #000;
  }

  :after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 10px;
    /* background: rgba(255,0,0,0.5); */
    /* transform: translateY(-10px); */
    top: -5px;
  }

  :hover:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 20px;
    /* background: rgba(255,0,0,0.5); */
    /* transform: translateY(-10px); */
    top: -10px;
  }

  :before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0);
    /* transform: translateY(-2px);    */
    top: -2px;

    transition: all 0.3s ease-in-out;
  }

  :hover:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0.2);
    /* transform: translateY(-2px);     */
    top: -2px;
  }
`;

const calculatePanelSizes = (
  numSplits: number,
  sizes: number[],
  minSize: number
) => {
  return Array.from({ length: numSplits }).map((_, i) => {
    return Math.max(minSize, sizes[i] || 0);
  });
};

export const ResizablePanel = ({
  minHeight,
  maxHeight,
  setHeight,
  height,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return;
    }

    let offsetY = 0;
    let currentY: number;
    let initialY: number;

    function onMousedown(e: MouseEvent) {
      initialY = e.clientY - offsetY;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(e: MouseEvent) {
      currentY = e.clientY - initialY;
      offsetY = currentY;

      let newHeight = Math.max(
        minHeight,
        Math.min(maxHeight, height - offsetY)
      );

      setHeight(newHeight);
    }

    function onMouseUp(e: MouseEvent) {
      initialY = currentY;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    target.addEventListener("mousedown", onMousedown);

    return () => {
      target.removeEventListener("mousedown", onMousedown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref, minHeight, maxHeight]);

  return (
    <div
      style={{
        height,
      }}
    >
      <Divider ref={ref} />
      {children}
    </div>
  );
};

export const SplitPane: React.FC<SplitPaneProps> = ({
  sizes,
  minSize,
  children,
}) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);

  let { width, height } = size;

  const numSplits = 3;
  const calculatedSizes = calculatePanelSizes(numSplits, sizes, minSize);
  console.log(calculatedSizes);

  const [panelHeight, setPanelHeight] = useState(100);
  const [panelHeight2, setPanelHeight2] = useState(100);
  const [panelHeight3, setPanelHeight3] = useState(100);

  // const [panelHeights, setPanelHeights] = useState<number[]>([100, 100, 50]);
  // const [collapsedPanels, setCollapsedPanels] = useState<boolean[]>([false, false, true]);

  const [panelState, setPanelState] = useState<{
    heights: number[];
    collapsed: boolean[];
  }>({
    heights: [70, 70, 70, 70, 70],
    collapsed: [false, false, false, false, false],
  });

  const { heights: panelHeights, collapsed: collapsedPanels } = panelState;

  const resizePanel = (index: number) => (newHeight: number) => {};

  const collapsePanel = (index: number) => () => {
    setPanelState((panelState) => {
      const panelHeights = panelState.heights;
      const collapsedPanels = panelState.collapsed;
      console.log(panelHeights);
      const lastUncollapsedIndex = collapsedPanels.lastIndexOf(false);
      console.log("lastUncollapsedIndex", lastUncollapsedIndex);
      const previousPanelHeight = panelHeights[index];

      const firstUncollapsedIndex = collapsedPanels.indexOf(false);

      console.log("firstUncollapsedIndex", firstUncollapsedIndex);

      if (index === firstUncollapsedIndex || index < lastUncollapsedIndex) {
        console.log("COLLAPSE UP a");

        return {
          ...panelState,
          collapsed: collapsedPanels.map((c, i) => {
            if (i === index) {
              return true;
            }
            return c;
          }),
          heights: panelHeights.map((height, i) => {
            if (i === index) {
              return COLLAPSED_SIZE;
            } else if (i === lastUncollapsedIndex) {
              return height + previousPanelHeight - COLLAPSED_SIZE;
            }
            return height;
          }),
        };
      } else {
        console.log("COLLAPSE DOWN");
        const previousUncollapsed = collapsedPanels
          .slice(0, index)
          .lastIndexOf(false);
        // const newPanelHeights =
        console.log({ previousUncollapsed });

        if (previousUncollapsed > -1) {
          // Increase height of previous to compensate;
          return {
            ...panelState,
            collapsed: collapsedPanels.map((c, i) => {
              if (i === index) {
                return true;
              }
              return c;
            }),
            heights: panelHeights.map((height, i) => {
              if (i === index) {
                return COLLAPSED_SIZE;
              } else if (i === previousUncollapsed) {
                return height + previousPanelHeight - COLLAPSED_SIZE;
              }
              return height;
            }),
          };
        } else {
          return panelState;
        }
      }
    });
  };

  const expandPanel = (index: number) => () => {


  }


  return (
    <Wrapper ref={ref}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <ResizablePanel
            minHeight={COLLAPSED_SIZE}
            maxHeight={10000}
            height={panelHeights[i]}
            setHeight={resizePanel(i)}
          >
            XYZ {i}
            {!collapsedPanels[i] && (
              <button onClick={collapsePanel(i)}>-</button>
            )}
            {collapsedPanels[i] && (
              <button onClick={expandPanel(i)}>+</button>
            )}            
          </ResizablePanel>
        ))}
        {/* <ResizablePanel
          minHeight={COLLAPSED_SIZE}
          maxHeight={height - panelHeight2 - panelHeight - COLLAPSED_SIZE}
          height={panelHeights[0]}
          setHeight={setPanelHeight3}
        >
          XYZ{" "}
          {panelHeight3 !== COLLAPSED_SIZE && (
            <button onClick={() => setPanelHeight3(COLLAPSED_SIZE)}>-</button>
          )}
        </ResizablePanel>
        <ResizablePanel
          minHeight={COLLAPSED_SIZE}
          maxHeight={height - panelHeight2 - panelHeight3 - COLLAPSED_SIZE}
          height={panelHeights[1]}
          setHeight={setPanelHeight}
        >
          ABC{" "}
          {panelHeight !== COLLAPSED_SIZE && (
            <button onClick={() => setPanelHeight(COLLAPSED_SIZE)}>-</button>
          )}
        </ResizablePanel>
        <ResizablePanel
          minHeight={COLLAPSED_SIZE}
          maxHeight={height - panelHeight - panelHeight3 - COLLAPSED_SIZE}
          height={panelHeights[2]}
          setHeight={setPanelHeight2}
        >
          DEF{" "}
          {panelHeight2 !== COLLAPSED_SIZE && (
            <button onClick={() => setPanelHeight2(COLLAPSED_SIZE)}>-</button>
          )}
        </ResizablePanel> */}
      </div>
    </Wrapper>
  );
};
