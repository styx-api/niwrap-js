// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSPYTHON_METADATA: Metadata = {
    id: "2424f19a382cf96fd7771ce3d7180d81a8324105.boutiques",
    name: "fspython",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FspythonParameters {
    "__STYXTYPE__": "fspython";
    "args"?: Array<string> | null | undefined;
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
        "fspython": fspython_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fspython(...)`.
 *
 * @interface
 */
interface FspythonOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fspython_params(
    args: Array<string> | null = null,
): FspythonParameters {
    /**
     * Build parameters.
    
     * @param args Arguments passed to the program.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fspython" as const,
    };
    if (args !== null) {
        params["args"] = args;
    }
    return params;
}


function fspython_cargs(
    params: FspythonParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("python3");
    cargs.push("[OPTION]");
    if ((params["args"] ?? null) !== null) {
        cargs.push(...(params["args"] ?? null));
    }
    return cargs;
}


function fspython_outputs(
    params: FspythonParameters,
    execution: Execution,
): FspythonOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FspythonOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fspython_execute(
    params: FspythonParameters,
    execution: Execution,
): FspythonOutputs {
    /**
     * Freesurfer's embedded Python interpreter.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FspythonOutputs`).
     */
    params = execution.params(params)
    const cargs = fspython_cargs(params, execution)
    const ret = fspython_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fspython(
    args: Array<string> | null = null,
    runner: Runner | null = null,
): FspythonOutputs {
    /**
     * Freesurfer's embedded Python interpreter.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param args Arguments passed to the program.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FspythonOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSPYTHON_METADATA);
    const params = fspython_params(args)
    return fspython_execute(params, execution);
}


export {
      FSPYTHON_METADATA,
      FspythonOutputs,
      FspythonParameters,
      fspython,
      fspython_params,
};
