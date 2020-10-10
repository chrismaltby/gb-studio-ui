import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Button } from "../buttons/Button";
import pkg from "../../package.json";

export const SplashWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const SplashSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.sidebar.background};
  width: 200px;
  height: 100%;
  flex-shrink: 0;
`;

export const SplashContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.colors.document.background};
  color: ${props => props.theme.colors.text};
  padding: 20px;
  flex-grow: 1;
`;

export const SplashLogo = styled.div`
  padding: 25px 20px 0;

  img {
    transition: transform 0.2s ease-in-out;
    width: 100%;
  }

  :hover img {
    transform: scale(1.05);
  }
`;

export const SplashAppTitleWrapper = styled.div`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 11px;
  text-align: center;
  margin-bottom: 20px;
  div {
    user-select: text;
  }
`;

export const SplashAppTitle = () => {
  const [showCommit, setShowCommit] = useState(false);
  const displayCommit = () => setShowCommit(true);
  return (
    <SplashAppTitleWrapper onClick={displayCommit}>
      {showCommit ? (
        <div>{pkg.version} COMMITHASH</div>
      ) : (
        `GB Studio ${pkg.version}`
      )}
    </SplashAppTitleWrapper>
  );
};

interface SplashTabProps {
  selected?: boolean;
}

export const SplashTab = styled.button<SplashTabProps>`
  padding: 8px 20px;
  text-align: left;
  color: ${props => props.theme.colors.text};
  background: transparent;
  border: 0;

  :hover {
    background: rgba(128, 128, 128, 0.3);
  }

  :active {
    background: rgba(128, 128, 128, 0.4);
  }

  ${props => (props.selected ? SplashTabSelectedStyles : "")}
`;

const SplashTabSelectedStyles = css`
  background: ${props => props.theme.colors.highlight};
  color: #fff;

  :hover {
    background: ${props => props.theme.colors.highlight};
    color: #fff;
  }
  :active {
    background: ${props => props.theme.colors.highlight};
    color: #fff;
  }
`;

export const SplashOpenButton = styled(Button).attrs(() => ({
  variant: "transparent",
}))`
  color: ${props => props.theme.colors.text};
  justify-content: flex-start;
  padding: 5px;
  margin: 15px;
`;

export interface Template {
  id: string;
  name: string;
  preview: string;
  videoPreview: boolean;
  description: string;
}

export interface SplashTemplateSelectProps {
  templates: Template[];
  name: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const SplashTemplateSelectWrapper = styled.div`
  width: 100%;
`;

export const SplashTemplateSelectOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;

  & > * {
    margin-right: 10px;
  }
`;

export const SplashTemplateButtonWrapper = styled.div`
  position: relative;
`;

export const SplashTemplateButton = styled.input.attrs(props => ({
  type: "radio",
}))`
  width: 80px;
  height: 80px;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  -webkit-appearance: none;
  :focus {
    box-shadow: 0 0 0px 4px ${props => props.theme.colors.highlight};
  }
`;

export const SplashTemplateLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 2px solid ${props => props.theme.colors.input.background};
  border-radius: 4px;
  -webkit-appearance: none;
  box-sizing: border-box;

  img,
  video {
    width: 100%;
    height: 100%;
  }

  ${SplashTemplateButton}:checked + & {
    border: 2px solid ${props => props.theme.colors.highlight};
    box-shadow: 0 0 0px 2px ${props => props.theme.colors.highlight};
  }
`;

export const SplashTemplateName = styled.div`
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SplashTemplateDescription = styled.div`
  font-size: 11px;
`;

interface SplashTemplateVideoProps {
  src: string;
  playing: boolean;
}

export const SplashTemplateVideo: React.FC<SplashTemplateVideoProps> = ({
  src,
  playing,
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      if (playing) {
        ref.current?.play();
      } else {
        ref.current?.pause();
      }
    }
  }, [playing, ref]);

  return <video ref={ref} src={src} muted loop />;
};

export const SplashTemplateSelect: React.FC<SplashTemplateSelectProps> = ({
  templates,
  name,
  value,
  onChange,
}) => {
  const selectedTemplate = templates.find(template => template.id === value);
  return (
    <SplashTemplateSelectWrapper>
      <SplashTemplateSelectOptions>
        {templates.map(template => (
          <SplashTemplateButtonWrapper key={template.id}>
            <SplashTemplateButton
              id={`${name}_${template.id}`}
              name={name}
              value={template.id}
              checked={template.id === value}
              onChange={() => onChange(template.id)}
            />
            <SplashTemplateLabel
              htmlFor={`${name}_${template.id}`}
              title={template.name}
            >
              {template.videoPreview ? (
                <SplashTemplateVideo
                  src={template.preview}
                  playing={template.id === value}
                />
              ) : (
                <img src={template.preview} />
              )}
            </SplashTemplateLabel>
          </SplashTemplateButtonWrapper>
        ))}
      </SplashTemplateSelectOptions>
      {selectedTemplate && (
        <>
          <SplashTemplateName>{selectedTemplate.name}</SplashTemplateName>
          <SplashTemplateDescription>
            {selectedTemplate.description}
          </SplashTemplateDescription>
        </>
      )}
    </SplashTemplateSelectWrapper>
  );
};

const SplashCreditsFadeAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SplashCredits = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: none;
  animation: ${SplashCreditsFadeAnimation} 1s linear;
  animation-fill-mode: forwards;
`;

export const SplashCreditsBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const c = ref.current;
      const ctx = c.getContext("2d");
      let time = 0;

      const render = () => {
        if (ref.current && ctx) {
          // Create gradient
          const bgGrad = ctx.createLinearGradient(0, 0, 0, 400);
          bgGrad.addColorStop(0, "#221e6a");
          bgGrad.addColorStop(0.25, "#bb205a");
          bgGrad.addColorStop(0.5, "#ce1e32");
          bgGrad.addColorStop(0.75, "#bb205a");
          bgGrad.addColorStop(1, "#221e6a");

          // Fill with gradient
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, 600, 400);

          var lineGrad = ctx.createLinearGradient(0, 0, 0, 400);
          lineGrad.addColorStop(0, "#e79c58");
          lineGrad.addColorStop(0.25, "#e5731b");
          lineGrad.addColorStop(0.4, "#ce1e32");
          lineGrad.addColorStop(0.5, "#ce1e32");
          lineGrad.addColorStop(0.6, "#ce1e32");
          lineGrad.addColorStop(0.75, "#e5731b");
          lineGrad.addColorStop(1, "#e79c58");

          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 2;

          for (let i = -8; i < 16; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 75, 0);
            ctx.lineTo(300, 200);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(i * 75, 400);
            ctx.lineTo(300, 200);
            ctx.stroke();
          }

          for (let i = 0; i < 15; i++) {
            ctx.beginPath();
            ctx.moveTo(0, 200 - 200 / (-time + i * 0.5));
            ctx.lineTo(600, 200 - 200 / (-time + i * 0.5));
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, 200 + 200 / (-time + i * 0.5));
            ctx.lineTo(600, 200 + 200 / (-time + i * 0.5));
            ctx.stroke();
          }

          if (time > 0.5) {
            time = 0;
          }

          time += 0.005;

          requestAnimationFrame(render);
        }
      };

      render();
    }
  }, [ref]);

  return <canvas ref={ref} width={600} height={400}></canvas>;
};

const SplashCreditsAnimation = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-200%);
  }
`;

export const SplashCreditsContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  animation: ${SplashCreditsAnimation} 120s linear infinite;
`;

export const SplashCreditsCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    height: 100%;
  }
`;

export const SplashCreditsTitle = styled.div`
  display: block;
  color: #fff;
  font-size: 40px;
  text-decoration: none;
  margin-bottom: 40px;
`;

export const SplashCreditsContributorWrapper = styled.div`
  display: block;
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  margin-bottom: 20px;
`;

export interface SplashCreditsContributorProps {
  contributor: {
    login: string;
    contributions: number;
  };
}

export const SplashCreditsContributor: React.FC<SplashCreditsContributorProps> = ({
  contributor,
}) => (
  <SplashCreditsContributorWrapper>
    {contributor.login}
  </SplashCreditsContributorWrapper>
);
