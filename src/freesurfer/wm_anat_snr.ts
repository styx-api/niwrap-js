// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const WM_ANAT_SNR_METADATA: Metadata = {
    id: "720d73c797ea6b11df6f56d663b8a31bbc7866b2.boutiques",
    name: "wm-anat-snr",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface WmAnatSnrParameters {
    "__STYXTYPE__": "wm-anat-snr";
    "subject": string;
    "output_file": string;
    "force": boolean;
    "nerode"?: number | null | undefined;
    "tmp_dir"?: string | null | undefined;
    "cleanup": boolean;
    "no_cleanup": boolean;
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
        "wm-anat-snr": wm_anat_snr_cargs,
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
        "wm-anat-snr": wm_anat_snr_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `wm_anat_snr(...)`.
 *
 * @interface
 */
interface WmAnatSnrOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output data file containing SNR and associated metrics
     */
    output_datafile: OutputPathType;
}


function wm_anat_snr_params(
    subject: string,
    output_file: string,
    force: boolean = false,
    nerode: number | null = null,
    tmp_dir: string | null = null,
    cleanup: boolean = false,
    no_cleanup: boolean = false,
): WmAnatSnrParameters {
    /**
     * Build parameters.
    
     * @param subject FreeSurfer subject name
     * @param output_file Output file
     * @param force Force analysis even if output is up-to-date
     * @param nerode Number of erosions for the WM mask
     * @param tmp_dir Temporary directory
     * @param cleanup Delete temporary directory after execution
     * @param no_cleanup Do not delete temporary directory after execution
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "wm-anat-snr" as const,
        "subject": subject,
        "output_file": output_file,
        "force": force,
        "cleanup": cleanup,
        "no_cleanup": no_cleanup,
    };
    if (nerode !== null) {
        params["nerode"] = nerode;
    }
    if (tmp_dir !== null) {
        params["tmp_dir"] = tmp_dir;
    }
    return params;
}


function wm_anat_snr_cargs(
    params: WmAnatSnrParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wm-anat-snr");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    cargs.push(
        "--o",
        (params["output_file"] ?? null)
    );
    if ((params["force"] ?? null)) {
        cargs.push("--force");
    }
    if ((params["nerode"] ?? null) !== null) {
        cargs.push(
            "--nerode",
            String((params["nerode"] ?? null))
        );
    }
    if ((params["tmp_dir"] ?? null) !== null) {
        cargs.push(
            "--tmp",
            (params["tmp_dir"] ?? null)
        );
    }
    if ((params["cleanup"] ?? null)) {
        cargs.push("--cleanup");
    }
    if ((params["no_cleanup"] ?? null)) {
        cargs.push("--no-cleanup");
    }
    return cargs;
}


function wm_anat_snr_outputs(
    params: WmAnatSnrParameters,
    execution: Execution,
): WmAnatSnrOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: WmAnatSnrOutputs = {
        root: execution.outputFile("."),
        output_datafile: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function wm_anat_snr_execute(
    params: WmAnatSnrParameters,
    execution: Execution,
): WmAnatSnrOutputs {
    /**
     * Measures the anatomical SNR in white matter (WM) for quality assurance (QA). This is an experimental metric.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `WmAnatSnrOutputs`).
     */
    params = execution.params(params)
    const cargs = wm_anat_snr_cargs(params, execution)
    const ret = wm_anat_snr_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function wm_anat_snr(
    subject: string,
    output_file: string,
    force: boolean = false,
    nerode: number | null = null,
    tmp_dir: string | null = null,
    cleanup: boolean = false,
    no_cleanup: boolean = false,
    runner: Runner | null = null,
): WmAnatSnrOutputs {
    /**
     * Measures the anatomical SNR in white matter (WM) for quality assurance (QA). This is an experimental metric.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject FreeSurfer subject name
     * @param output_file Output file
     * @param force Force analysis even if output is up-to-date
     * @param nerode Number of erosions for the WM mask
     * @param tmp_dir Temporary directory
     * @param cleanup Delete temporary directory after execution
     * @param no_cleanup Do not delete temporary directory after execution
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `WmAnatSnrOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(WM_ANAT_SNR_METADATA);
    const params = wm_anat_snr_params(subject, output_file, force, nerode, tmp_dir, cleanup, no_cleanup)
    return wm_anat_snr_execute(params, execution);
}


export {
      WM_ANAT_SNR_METADATA,
      WmAnatSnrOutputs,
      WmAnatSnrParameters,
      wm_anat_snr,
      wm_anat_snr_params,
};
