// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONCAT_BVARS_METADATA: Metadata = {
    id: "328d9c324b79e0289369cb9b2b4e758cac2f1131.boutiques",
    name: "concat_bvars",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface ConcatBvarsParameters {
    "__STYXTYPE__": "concat_bvars";
    "output_bvars": string;
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
        "concat_bvars": concat_bvars_cargs,
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
        "concat_bvars": concat_bvars_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `concat_bvars(...)`.
 *
 * @interface
 */
interface ConcatBvarsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Concatenated output .bvars file
     */
    output_file: OutputPathType;
}


function concat_bvars_params(
    output_bvars: string,
): ConcatBvarsParameters {
    /**
     * Build parameters.
    
     * @param output_bvars Output .bvars file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "concat_bvars" as const,
        "output_bvars": output_bvars,
    };
    return params;
}


function concat_bvars_cargs(
    params: ConcatBvarsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("concat_bvars");
    cargs.push((params["output_bvars"] ?? null));
    cargs.push("[INPUT_BVARS...]");
    return cargs;
}


function concat_bvars_outputs(
    params: ConcatBvarsParameters,
    execution: Execution,
): ConcatBvarsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConcatBvarsOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_bvars"] ?? null)].join('')),
    };
    return ret;
}


function concat_bvars_execute(
    params: ConcatBvarsParameters,
    execution: Execution,
): ConcatBvarsOutputs {
    /**
     * Concatenate multiple .bvars files into a single .bvars file.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConcatBvarsOutputs`).
     */
    params = execution.params(params)
    const cargs = concat_bvars_cargs(params, execution)
    const ret = concat_bvars_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function concat_bvars(
    output_bvars: string,
    runner: Runner | null = null,
): ConcatBvarsOutputs {
    /**
     * Concatenate multiple .bvars files into a single .bvars file.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output_bvars Output .bvars file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConcatBvarsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONCAT_BVARS_METADATA);
    const params = concat_bvars_params(output_bvars)
    return concat_bvars_execute(params, execution);
}


export {
      CONCAT_BVARS_METADATA,
      ConcatBvarsOutputs,
      ConcatBvarsParameters,
      concat_bvars,
      concat_bvars_params,
};
