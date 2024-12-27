import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../../apis/projects";

export const useCreateProject = () => {
  const { mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log("Project created successfully");
      console.log(data);
    },
    onError: (error) => {
      console.error("Failed to create project");
      console.error(error);
    },
  });

  return { createProjectMutation: mutateAsync, isPending, isSuccess, error };
};