import util from "util";
import child_process from "child_process";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { REACT_PROJECT_COMMAND } from "../config/serverConfig.js";

const execPromisified = util.promisify(child_process.exec); // Promisify exec function

export async function createProjectController(req, res) {
  // create a unique id and then inside the project folder create a new folder with that id.
  const projectId = uuidv4();

  // make a new directory with the project id
  await fs.mkdir(`./projects/${projectId}`);

  // after this call the npm create vite command in the newly created project folder
  const response = await execPromisified(
    // REACT_PROJECT_COMMAND, // command to create a new react vite project
    "npm create vite@latest sandbox -- --template react",
    {
      cwd: `./projects/${projectId}`,
    }
  );
  console.log(response, " response");
  console.log(
    process.env.REACT_PROJECT_COMMAND,
    " process.env.REACT_PROJECT_COMMAND"
  );

  return res.json({
    message: "Project created",
    data: projectId,
  });
}
