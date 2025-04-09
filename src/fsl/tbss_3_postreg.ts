// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TBSS_3_POSTREG_METADATA: Metadata = {
    id: "9b60729f65b90df6d56285b34924949fc192d80a.boutiques",
    name: "tbss_3_postreg",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface Tbss3PostregParameters {
    "__STYXTYPE__": "tbss_3_postreg";
    "derive_mean_from_study": boolean;
    "use_fmrib58": boolean;
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
        "tbss_3_postreg": tbss_3_postreg_cargs,
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
 * Output object returned when calling `tbss_3_postreg(...)`.
 *
 * @interface
 */
interface Tbss3PostregOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function tbss_3_postreg_params(
    derive_mean_from_study: boolean = false,
    use_fmrib58: boolean = false,
): Tbss3PostregParameters {
    /**
     * Build parameters.
    
     * @param derive_mean_from_study Derive mean_FA and mean_FA_skeleton from mean of all subjects in study (recommended)
     * @param use_fmrib58 Use FMRIB58_FA and its skeleton instead of study-derived mean and skeleton
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tbss_3_postreg" as const,
        "derive_mean_from_study": derive_mean_from_study,
        "use_fmrib58": use_fmrib58,
    };
    return params;
}


function tbss_3_postreg_cargs(
    params: Tbss3PostregParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tbss_3_postreg");
    if ((params["derive_mean_from_study"] ?? null)) {
        cargs.push("-S");
    }
    if ((params["use_fmrib58"] ?? null)) {
        cargs.push("-T");
    }
    return cargs;
}


function tbss_3_postreg_outputs(
    params: Tbss3PostregParameters,
    execution: Execution,
): Tbss3PostregOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Tbss3PostregOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function tbss_3_postreg_execute(
    params: Tbss3PostregParameters,
    execution: Execution,
): Tbss3PostregOutputs {
    /**
     * TBSS post-registration processing.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Tbss3PostregOutputs`).
     */
    params = execution.params(params)
    const cargs = tbss_3_postreg_cargs(params, execution)
    const ret = tbss_3_postreg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tbss_3_postreg(
    derive_mean_from_study: boolean = false,
    use_fmrib58: boolean = false,
    runner: Runner | null = null,
): Tbss3PostregOutputs {
    /**
     * TBSS post-registration processing.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param derive_mean_from_study Derive mean_FA and mean_FA_skeleton from mean of all subjects in study (recommended)
     * @param use_fmrib58 Use FMRIB58_FA and its skeleton instead of study-derived mean and skeleton
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Tbss3PostregOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TBSS_3_POSTREG_METADATA);
    const params = tbss_3_postreg_params(derive_mean_from_study, use_fmrib58)
    return tbss_3_postreg_execute(params, execution);
}


export {
      TBSS_3_POSTREG_METADATA,
      Tbss3PostregOutputs,
      Tbss3PostregParameters,
      tbss_3_postreg,
      tbss_3_postreg_params,
};
