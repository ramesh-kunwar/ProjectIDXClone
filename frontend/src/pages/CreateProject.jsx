import React from "react";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout } from "antd";

const CreateProject = () => {
  const { Header, Content, Footer } = Layout;
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(50% - 8px)",
  };
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const { createProjectMutation, isPending } = useCreateProject();
  const handleCreateProject = async () => {
    // call the createProjectMutation function here
    console.log("Going to trigger the api");
    try {
      await createProjectMutation();
      console.log("Now we should redirect to the project page");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <h1>Create Project</h1>
      </Header>
      <Content style={contentStyle}>
        <Button
          type="primary"
          onClick={handleCreateProject}
          loading={isPending}
        >
          Create Playground
        </Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default CreateProject;
