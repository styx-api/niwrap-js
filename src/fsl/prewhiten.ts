// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PREWHITEN_METADATA: Metadata = {
    id: "7908b2674351c8eda706fea6c142d2b26d298d0f.boutiques",
    name: "prewhiten",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PrewhitenParameters {
    "__STYXTYPE__": "prewhiten";
    "feat_directory": string;
    "output_directory"?: string | null | undefined;
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
        "prewhiten": prewhiten_cargs,
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
        "prewhiten": prewhiten_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `prewhiten(...)`.
 *
 * @interface
 */
interface PrewhitenOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output files generated in the specified output directory
     */
    output_files: OutputPathType | null;
}


function prewhiten_params(
    feat_directory: string,
    output_directory: string | null = null,
): PrewhitenParameters {
    /**
     * Build parameters.
    
     * @param feat_directory Input FEAT directory
     * @param output_directory Change output directory from default of input FEAT directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "prewhiten" as const,
        "feat_directory": feat_directory,
    };
    if (output_directory !== null) {
        params["output_directory"] = output_directory;
    }
    return params;
}


function prewhiten_cargs(
    params: PrewhitenParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("prewhiten");
    cargs.push((params["feat_directory"] ?? null));
    if ((params["output_directory"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_directory"] ?? null)
        );
    }
    return cargs;
}


function prewhiten_outputs(
    params: PrewhitenParameters,
    execution: Execution,
): PrewhitenOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PrewhitenOutputs = {
        root: execution.outputFile("."),
        output_files: ((params["output_directory"] ?? null) !== null) ? execution.outputFile([(params["output_directory"] ?? null), "/*"].join('')) : null,
    };
    return ret;
}


function prewhiten_execute(
    params: PrewhitenParameters,
    execution: Execution,
): PrewhitenOutputs {
    /**
     * Prewhitening tool for FEAT directories.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PrewhitenOutputs`).
     */
    params = execution.params(params)
    const cargs = prewhiten_cargs(params, execution)
    const ret = prewhiten_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function prewhiten(
    feat_directory: string,
    output_directory: string | null = null,
    runner: Runner | null = null,
): PrewhitenOutputs {
    /**
     * Prewhitening tool for FEAT directories.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param feat_directory Input FEAT directory
     * @param output_directory Change output directory from default of input FEAT directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PrewhitenOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PREWHITEN_METADATA);
    const params = prewhiten_params(feat_directory, output_directory)
    return prewhiten_execute(params, execution);
}


export {
      PREWHITEN_METADATA,
      PrewhitenOutputs,
      PrewhitenParameters,
      prewhiten,
      prewhiten_params,
};
