// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RECON_ALL_CLINICAL_SH_METADATA: Metadata = {
    id: "38aa6da8e0504acf21091c65fc76ff6026418cb2.boutiques",
    name: "recon-all-clinical.sh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ReconAllClinicalShParameters {
    "__STYXTYPE__": "recon-all-clinical.sh";
    "input_scan": InputPathType;
    "subject_id": string;
    "threads": number;
    "subject_dir"?: string | null | undefined;
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
        "recon-all-clinical.sh": recon_all_clinical_sh_cargs,
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
 * Output object returned when calling `recon_all_clinical_sh(...)`.
 *
 * @interface
 */
interface ReconAllClinicalShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function recon_all_clinical_sh_params(
    input_scan: InputPathType,
    subject_id: string,
    threads: number,
    subject_dir: string | null = null,
): ReconAllClinicalShParameters {
    /**
     * Build parameters.
    
     * @param input_scan Input scan file to be processed.
     * @param subject_id Identifier for the subject being processed.
     * @param threads Number of threads to use for processing.
     * @param subject_dir Optional subjects directory. Only necessary if the environment variable SUBJECTS_DIR is not set or needs to be overridden.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "recon-all-clinical.sh" as const,
        "input_scan": input_scan,
        "subject_id": subject_id,
        "threads": threads,
    };
    if (subject_dir !== null) {
        params["subject_dir"] = subject_dir;
    }
    return params;
}


function recon_all_clinical_sh_cargs(
    params: ReconAllClinicalShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("recon-all-clinical.sh");
    cargs.push(execution.inputFile((params["input_scan"] ?? null)));
    cargs.push((params["subject_id"] ?? null));
    cargs.push(String((params["threads"] ?? null)));
    if ((params["subject_dir"] ?? null) !== null) {
        cargs.push((params["subject_dir"] ?? null));
    }
    return cargs;
}


function recon_all_clinical_sh_outputs(
    params: ReconAllClinicalShParameters,
    execution: Execution,
): ReconAllClinicalShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ReconAllClinicalShOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function recon_all_clinical_sh_execute(
    params: ReconAllClinicalShParameters,
    execution: Execution,
): ReconAllClinicalShOutputs {
    /**
     * Recon-all-like stream for processing clinical brain MRI scans of arbitrary orientation, resolution, and contrast using SynthSeg and SynthSR.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ReconAllClinicalShOutputs`).
     */
    params = execution.params(params)
    const cargs = recon_all_clinical_sh_cargs(params, execution)
    const ret = recon_all_clinical_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function recon_all_clinical_sh(
    input_scan: InputPathType,
    subject_id: string,
    threads: number,
    subject_dir: string | null = null,
    runner: Runner | null = null,
): ReconAllClinicalShOutputs {
    /**
     * Recon-all-like stream for processing clinical brain MRI scans of arbitrary orientation, resolution, and contrast using SynthSeg and SynthSR.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_scan Input scan file to be processed.
     * @param subject_id Identifier for the subject being processed.
     * @param threads Number of threads to use for processing.
     * @param subject_dir Optional subjects directory. Only necessary if the environment variable SUBJECTS_DIR is not set or needs to be overridden.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ReconAllClinicalShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RECON_ALL_CLINICAL_SH_METADATA);
    const params = recon_all_clinical_sh_params(input_scan, subject_id, threads, subject_dir)
    return recon_all_clinical_sh_execute(params, execution);
}


export {
      RECON_ALL_CLINICAL_SH_METADATA,
      ReconAllClinicalShOutputs,
      ReconAllClinicalShParameters,
      recon_all_clinical_sh,
      recon_all_clinical_sh_params,
};
