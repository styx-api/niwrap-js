// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_INIT_GLOBAL_TRACTOGRAPHY_METADATA: Metadata = {
    id: "67eb4585ff3c986788ed4212a3618bb647f3bf08.boutiques",
    name: "mris_init_global_tractography",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisInitGlobalTractographyParameters {
    "__STYXTYPE__": "mris_init_global_tractography";
    "subject": string;
    "parcellation": string;
    "output_volume": string;
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
        "mris_init_global_tractography": mris_init_global_tractography_cargs,
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
 * Output object returned when calling `mris_init_global_tractography(...)`.
 *
 * @interface
 */
interface MrisInitGlobalTractographyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_init_global_tractography_params(
    subject: string,
    parcellation: string,
    output_volume: string,
): MrisInitGlobalTractographyParameters {
    /**
     * Build parameters.
    
     * @param subject The subject on which to perform tractography.
     * @param parcellation The parcellation to use for tractography.
     * @param output_volume Output volume of the initialized global tractography.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_init_global_tractography" as const,
        "subject": subject,
        "parcellation": parcellation,
        "output_volume": output_volume,
    };
    return params;
}


function mris_init_global_tractography_cargs(
    params: MrisInitGlobalTractographyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_init_global_tractography");
    cargs.push((params["subject"] ?? null));
    cargs.push((params["parcellation"] ?? null));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function mris_init_global_tractography_outputs(
    params: MrisInitGlobalTractographyParameters,
    execution: Execution,
): MrisInitGlobalTractographyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisInitGlobalTractographyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_init_global_tractography_execute(
    params: MrisInitGlobalTractographyParameters,
    execution: Execution,
): MrisInitGlobalTractographyOutputs {
    /**
     * Initializes global tractography for a given subject and parcellation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisInitGlobalTractographyOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_init_global_tractography_cargs(params, execution)
    const ret = mris_init_global_tractography_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_init_global_tractography(
    subject: string,
    parcellation: string,
    output_volume: string,
    runner: Runner | null = null,
): MrisInitGlobalTractographyOutputs {
    /**
     * Initializes global tractography for a given subject and parcellation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject The subject on which to perform tractography.
     * @param parcellation The parcellation to use for tractography.
     * @param output_volume Output volume of the initialized global tractography.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisInitGlobalTractographyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_INIT_GLOBAL_TRACTOGRAPHY_METADATA);
    const params = mris_init_global_tractography_params(subject, parcellation, output_volume)
    return mris_init_global_tractography_execute(params, execution);
}


export {
      MRIS_INIT_GLOBAL_TRACTOGRAPHY_METADATA,
      MrisInitGlobalTractographyOutputs,
      MrisInitGlobalTractographyParameters,
      mris_init_global_tractography,
      mris_init_global_tractography_params,
};
