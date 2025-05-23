// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FOCI_CREATE_METADATA: Metadata = {
    id: "b44d5a5c475f62b461f92b071ae7cead58a1f1d0.boutiques",
    name: "foci-create",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface FociCreateClassParameters {
    "__STYXTYPE__": "class";
    "class_name": string;
    "foci_list_file": string;
    "surface": InputPathType;
}


interface FociCreateParameters {
    "__STYXTYPE__": "foci-create";
    "output": string;
    "class"?: Array<FociCreateClassParameters> | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "foci-create": foci_create_cargs,
        "class": foci_create_class_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "foci-create": foci_create_outputs,
    };
    return outputsFuncs[t];
}


function foci_create_class_params(
    class_name: string,
    foci_list_file: string,
    surface: InputPathType,
): FociCreateClassParameters {
    /**
     * Build parameters.
    
     * @param class_name name of class
     * @param foci_list_file text file containing foci names, coordinates, and colors
     * @param surface surface file for projection of foci list file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "class" as const,
        "class_name": class_name,
        "foci_list_file": foci_list_file,
        "surface": surface,
    };
    return params;
}


function foci_create_class_cargs(
    params: FociCreateClassParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-class");
    cargs.push((params["class_name"] ?? null));
    cargs.push((params["foci_list_file"] ?? null));
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `foci_create(...)`.
 *
 * @interface
 */
interface FociCreateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output foci file
     */
    output: OutputPathType;
}


function foci_create_params(
    output: string,
    class_: Array<FociCreateClassParameters> | null = null,
): FociCreateParameters {
    /**
     * Build parameters.
    
     * @param output the output foci file
     * @param class_ specify class input data
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "foci-create" as const,
        "output": output,
    };
    if (class_ !== null) {
        params["class"] = class_;
    }
    return params;
}


function foci_create_cargs(
    params: FociCreateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-foci-create");
    cargs.push((params["output"] ?? null));
    if ((params["class"] ?? null) !== null) {
        cargs.push(...(params["class"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function foci_create_outputs(
    params: FociCreateParameters,
    execution: Execution,
): FociCreateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FociCreateOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function foci_create_execute(
    params: FociCreateParameters,
    execution: Execution,
): FociCreateOutputs {
    /**
     * Create a foci file.
     * 
     * Creates a foci file from names, coordinates, and RGB values in a text file.  The text file must have the following format (2 lines per focus):
     * 
     * <focus-name>
     * <red> <green> <blue> <x> <y> <z> 
     * ...
     * 
     * Foci names are specified on a separate line from their coordinates and color, in order to let foci names contain spaces.  Whitespace is trimmed from both ends of the foci name, but is kept if it is in the middle of a name.  The values of <red>, <green>, <blue> and must be integers from 0 to 255, and will specify the color the foci is drawn as.
     * 
     * Foci are grouped into classes and the name for the class is specified using the <class-name> parameter.
     * 
     * All foci within one text file must be associated with the structure contained in the <surface> parameter and are projected to that surface.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FociCreateOutputs`).
     */
    params = execution.params(params)
    const cargs = foci_create_cargs(params, execution)
    const ret = foci_create_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function foci_create(
    output: string,
    class_: Array<FociCreateClassParameters> | null = null,
    runner: Runner | null = null,
): FociCreateOutputs {
    /**
     * Create a foci file.
     * 
     * Creates a foci file from names, coordinates, and RGB values in a text file.  The text file must have the following format (2 lines per focus):
     * 
     * <focus-name>
     * <red> <green> <blue> <x> <y> <z> 
     * ...
     * 
     * Foci names are specified on a separate line from their coordinates and color, in order to let foci names contain spaces.  Whitespace is trimmed from both ends of the foci name, but is kept if it is in the middle of a name.  The values of <red>, <green>, <blue> and must be integers from 0 to 255, and will specify the color the foci is drawn as.
     * 
     * Foci are grouped into classes and the name for the class is specified using the <class-name> parameter.
     * 
     * All foci within one text file must be associated with the structure contained in the <surface> parameter and are projected to that surface.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param output the output foci file
     * @param class_ specify class input data
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FociCreateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FOCI_CREATE_METADATA);
    const params = foci_create_params(output, class_)
    return foci_create_execute(params, execution);
}


export {
      FOCI_CREATE_METADATA,
      FociCreateClassParameters,
      FociCreateOutputs,
      FociCreateParameters,
      foci_create,
      foci_create_class_params,
      foci_create_params,
};
