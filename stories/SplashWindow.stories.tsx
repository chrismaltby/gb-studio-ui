// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import React, { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import darkTheme from "../src/theme/darkTheme";
import neonTheme from "../src/theme/neonTheme";
import { Toolbar } from "../src/toolbar/Toolbar";
import {
  SplashAppTitle,
  SplashContent,
  SplashCredits,
  SplashCreditsBackground,
  SplashCreditsCloseButton,
  SplashCreditsContent,
  SplashCreditsContributor,
  SplashCreditsTitle,
  SplashLogo,
  SplashOpenButton,
  SplashProject,
  SplashScroll,
  SplashSidebar,
  SplashTab,
  SplashTemplateSelect,
  SplashWrapper,
} from "../src/splash/Splash";
import logoFile from "../src/icons/GBStudioLogo.svg";
import sampleMovieFile from "./static/sample-project-sq.mp4";
import sample1MovieFile from "./static/sample-project-1-sq.mp4";
import blankProjectImageFile from "./static/blank-project.png";
import { FlexGrow } from "../src/spacing/Spacing";
import { Button } from "../src/buttons/Button";
import { TextField } from "../src/form/TextField";
import { FormField, FormRow } from "../src/form/FormLayout";
import { Label } from "../src/form/Label";
import { CloseIcon, DotsIcon } from "../src/icons/Icons";
import contributors from "../contributors.json";

const recentProjects = [
  {
    name: "UntitledGBGame.gbsproj",
    path: "/Users/chris/Desktop/UntitledGBGame",
  },
];

for (let i = 0; i < 10; i++) {
  recentProjects.push({
    name: `Project${i}.gbsproj`,
    path: `/Users/chris/Desktop/Project${i}`,
  });
}

export default {
  title: "Example/SplashWindow",
  component: Toolbar,
} as Meta;

export const Window = () => {
  const themeContext = useContext(ThemeContext);
  const [templateId, setTemplateId] = useState("gbs2");
  const [section, setSection] = useState<"new" | "recent">("new");
  const [openCredits, setOpenCredits] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        width: 600,
        height: 400,
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SplashWrapper>
        <SplashSidebar>
          <SplashLogo onClick={() => setOpenCredits(true)}>
            <img src={logoFile} />
          </SplashLogo>
          <SplashAppTitle />
          <SplashTab
            selected={section === "new"}
            onClick={() => setSection("new")}
          >
            New
          </SplashTab>
          <SplashTab
            selected={section === "recent"}
            onClick={() => setSection("recent")}
          >
            Recent
          </SplashTab>
          <SplashTab>Documentation</SplashTab>
          <FlexGrow />
          <SplashOpenButton>Open Project</SplashOpenButton>
        </SplashSidebar>
        {section === "new" && (
          <SplashContent>
            <FormRow>
              <TextField
                name="name"
                label="Project name"
                size="large"
                value="Untitled"
              />
            </FormRow>
            <FormRow>
              <TextField
                name="path"
                label="Path"
                size="large"
                value="/Users/me/Documents"
                additionalRight={
                  <Button>
                    <DotsIcon />
                  </Button>
                }
              />
            </FormRow>
            <FormRow>
              <FormField name="template" label="Template">
                <SplashTemplateSelect
                  name="template"
                  templates={[
                    {
                      id: "gbs2",
                      name: "Sample Project",
                      preview: sampleMovieFile,
                      videoPreview: true,
                      description:
                        "A GBC template containing examples of top down, platformer, point and click and shooter scenes",
                    },
                    {
                      id: "gbhtml",
                      name: "Sample Project (1.0.0)",
                      preview: sample1MovieFile,
                      videoPreview: true,
                      description:
                        "The original GB Studio template. A short 4 color top down game",
                    },
                    {
                      id: "blank",
                      name: "Blank Project",
                      preview: blankProjectImageFile,
                      videoPreview: false,
                      description: "A completely blank canvas",
                    },
                  ]}
                  value={templateId}
                  onChange={setTemplateId}
                />
              </FormField>
            </FormRow>
            <FlexGrow />
            <FormRow>
              <Button
                variant="primary"
                size="large"
              >
                Create Project
              </Button>
            </FormRow>
          </SplashContent>
        )}

        {section === "recent" && (
          <SplashScroll>
            {recentProjects.map((project, index) => (
              <SplashProject key={index} project={project} />
            ))}
          </SplashScroll>
        )}
      </SplashWrapper>
      {openCredits && (
        <FocusLock>
          <SplashCredits>
            <SplashCreditsBackground />
            <SplashCreditsContent>
              <SplashCreditsTitle>GB Studio</SplashCreditsTitle>
              {contributors.map(contributor => (
                <SplashCreditsContributor
                  key={contributor.id}
                  contributor={contributor}
                />
              ))}
            </SplashCreditsContent>
            <SplashCreditsCloseButton>
              <AutoFocusInside>
                <Button variant="primary" onClick={() => setOpenCredits(false)}>
                  <CloseIcon />
                </Button>
              </AutoFocusInside>
            </SplashCreditsCloseButton>
          </SplashCredits>
        </FocusLock>
      )}
    </div>
  );
};

export const WindowDark = () => (
  <ThemeProvider theme={darkTheme}>
    <Window />
  </ThemeProvider>
);

export const WindowNeon = () => (
  <ThemeProvider theme={neonTheme}>
    <Window />
  </ThemeProvider>
);
