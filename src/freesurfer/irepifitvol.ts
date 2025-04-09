// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IREPIFITVOL_METADATA: Metadata = {
    id: "663ec789ed974f373b832bb8e7b325af94880c4a.boutiques",
    name: "irepifitvol",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface IrepifitvolParameters {
    "__STYXTYPE__": "irepifitvol";
    "input_file": InputPathType;
    "output_file": string;
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
        "irepifitvol": irepifitvol_cargs,
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
        "irepifitvol": irepifitvol_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `irepifitvol(...)`.
 *
 * @interface
 */
interface IrepifitvolOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting volume file after fitting
     */
    fitted_output: OutputPathType;
}


function irepifitvol_params(
    input_file: InputPathType,
    output_file: string = "fitted_output",
): IrepifitvolParameters {
    /**
     * Build parameters.
    
     * @param input_file Input volume file for fitting
     * @param output_file Output volume file after fitting
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "irepifitvol" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    return params;
}


function irepifitvol_cargs(
    params: IrepifitvolParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("irepifitvol");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function irepifitvol_outputs(
    params: IrepifitvolParameters,
    execution: Execution,
): IrepifitvolOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: IrepifitvolOutputs = {
        root: execution.outputFile("."),
        fitted_output: execution.outputFile([(params["output_file"] ?? null), ".ext"].join('')),
    };
    return ret;
}


function irepifitvol_execute(
    params: IrepifitvolParameters,
    execution: Execution,
): IrepifitvolOutputs {
    /**
     * A tool for 3D volume fitting.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `IrepifitvolOutputs`).
     */
    params = execution.params(params)
    const cargs = irepifitvol_cargs(params, execution)
    const ret = irepifitvol_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function irepifitvol(
    input_file: InputPathType,
    output_file: string = "fitted_output",
    runner: Runner | null = null,
): IrepifitvolOutputs {
    /**
     * A tool for 3D volume fitting.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input volume file for fitting
     * @param output_file Output volume file after fitting
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `IrepifitvolOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IREPIFITVOL_METADATA);
    const params = irepifitvol_params(input_file, output_file)
    return irepifitvol_execute(params, execution);
}


export {
      IREPIFITVOL_METADATA,
      IrepifitvolOutputs,
      IrepifitvolParameters,
      irepifitvol,
      irepifitvol_params,
};
