// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SHRINKWRAP_METADATA: Metadata = {
    id: "12ec14d079d6b626e78773a4c0b060c225cdd33f.boutiques",
    name: "mris_shrinkwrap",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisShrinkwrapParameters {
    "__STYXTYPE__": "mris_shrinkwrap";
    "volume": InputPathType;
    "output_name": string;
    "threshold"?: number | null | undefined;
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
        "mris_shrinkwrap": mris_shrinkwrap_cargs,
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
        "mris_shrinkwrap": mris_shrinkwrap_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_shrinkwrap(...)`.
 *
 * @interface
 */
interface MrisShrinkwrapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output surface file representing the inner skull.
     */
    inner_skull: OutputPathType;
    /**
     * Output surface file representing the outer skull.
     */
    outer_skull: OutputPathType;
    /**
     * Output surface file representing the outer skin.
     */
    outer_skin: OutputPathType;
}


function mris_shrinkwrap_params(
    volume: InputPathType,
    output_name: string,
    threshold: number | null = null,
): MrisShrinkwrapParameters {
    /**
     * Build parameters.
    
     * @param volume Input image volume for shrink wrap.
     * @param output_name Base name for output surface files.
     * @param threshold Apply threshold to image before deforming on distance transform.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_shrinkwrap" as const,
        "volume": volume,
        "output_name": output_name,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    return params;
}


function mris_shrinkwrap_cargs(
    params: MrisShrinkwrapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_shrinkwrap");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    cargs.push((params["output_name"] ?? null));
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-t",
            String((params["threshold"] ?? null))
        );
    }
    return cargs;
}


function mris_shrinkwrap_outputs(
    params: MrisShrinkwrapParameters,
    execution: Execution,
): MrisShrinkwrapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisShrinkwrapOutputs = {
        root: execution.outputFile("."),
        inner_skull: execution.outputFile([(params["output_name"] ?? null), "_inner_skull.tri"].join('')),
        outer_skull: execution.outputFile([(params["output_name"] ?? null), "_outer_skull.tri"].join('')),
        outer_skin: execution.outputFile([(params["output_name"] ?? null), "_outer_skin.tri"].join('')),
    };
    return ret;
}


function mris_shrinkwrap_execute(
    params: MrisShrinkwrapParameters,
    execution: Execution,
): MrisShrinkwrapOutputs {
    /**
     * Generate shrink-wrapped tessellations of the input volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisShrinkwrapOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_shrinkwrap_cargs(params, execution)
    const ret = mris_shrinkwrap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_shrinkwrap(
    volume: InputPathType,
    output_name: string,
    threshold: number | null = null,
    runner: Runner | null = null,
): MrisShrinkwrapOutputs {
    /**
     * Generate shrink-wrapped tessellations of the input volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param volume Input image volume for shrink wrap.
     * @param output_name Base name for output surface files.
     * @param threshold Apply threshold to image before deforming on distance transform.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisShrinkwrapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SHRINKWRAP_METADATA);
    const params = mris_shrinkwrap_params(volume, output_name, threshold)
    return mris_shrinkwrap_execute(params, execution);
}


export {
      MRIS_SHRINKWRAP_METADATA,
      MrisShrinkwrapOutputs,
      MrisShrinkwrapParameters,
      mris_shrinkwrap,
      mris_shrinkwrap_params,
};
