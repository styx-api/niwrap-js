// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const UNPACKIMADIR2_METADATA: Metadata = {
    id: "bdf6eb9c77635e9326080586e7654d60496c26b4.boutiques",
    name: "unpackimadir2",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Unpackimadir2Parameters {
    "__STYXTYPE__": "unpackimadir2";
    "directory": InputPathType;
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
        "unpackimadir2": unpackimadir2_cargs,
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
 * Output object returned when calling `unpackimadir2(...)`.
 *
 * @interface
 */
interface Unpackimadir2Outputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function unpackimadir2_params(
    directory: InputPathType,
): Unpackimadir2Parameters {
    /**
     * Build parameters.
    
     * @param directory Image directory to unpack.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "unpackimadir2" as const,
        "directory": directory,
    };
    return params;
}


function unpackimadir2_cargs(
    params: Unpackimadir2Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("unpackimadir2");
    cargs.push(execution.inputFile((params["directory"] ?? null)));
    return cargs;
}


function unpackimadir2_outputs(
    params: Unpackimadir2Parameters,
    execution: Execution,
): Unpackimadir2Outputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Unpackimadir2Outputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function unpackimadir2_execute(
    params: Unpackimadir2Parameters,
    execution: Execution,
): Unpackimadir2Outputs {
    /**
     * Tool to unpack image directories, from FreeSurfer suite.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Unpackimadir2Outputs`).
     */
    params = execution.params(params)
    const cargs = unpackimadir2_cargs(params, execution)
    const ret = unpackimadir2_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function unpackimadir2(
    directory: InputPathType,
    runner: Runner | null = null,
): Unpackimadir2Outputs {
    /**
     * Tool to unpack image directories, from FreeSurfer suite.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param directory Image directory to unpack.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Unpackimadir2Outputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(UNPACKIMADIR2_METADATA);
    const params = unpackimadir2_params(directory)
    return unpackimadir2_execute(params, execution);
}


export {
      UNPACKIMADIR2_METADATA,
      Unpackimadir2Outputs,
      Unpackimadir2Parameters,
      unpackimadir2,
      unpackimadir2_params,
};
