import util from "util";
import child_process from "child_process";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const execPromisified = util.promisify(child_process.exec); // Promisify exec function

export async function createProjectController(req, res) {
  // create a unique id and then inside the project folder create a new folder with that id.
  const projectId = uuidv4();

  // make a new directory with the project id
  await fs.mkdir(`./projects/${projectId}`);

  // after this call the npm create vite command in the newly created project folder
  const response = await execPromisified(
    "npm create vite@latest sandbox -- --template react", // command to create a new react vite project
    {
      cwd: `./projects/${projectId}`,
    }
  );

  return res.json({
    message: "Project created",
    data: projectId,
  });
}
