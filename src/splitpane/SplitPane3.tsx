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

export const SplitPane: React.FC<SplitPaneProps> = ({
  sizes,
  minSize,
  children,
}) => {

  return (
    <Wrapper>
        <div style={{flexGrow: 1, flexBasis: 80}}>
            ABC
        </div>
        <div style={{flexGrow: 1, flexBasis: 10}}>
            DEF
        </div>
        <div style={{flexGrow: 1, flexBasis: 10}}>
            XYZ
        </div>
        <div style={{flexGrow: 1, flexBasis: 10}}>
            123
        </div>            
    </Wrapper>
  );
};
