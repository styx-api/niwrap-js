// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_MOTION_OUTLIERS_METADATA: Metadata = {
    id: "c30ccf4645a9bdf2514d99c51c04eb1b98052f7f.boutiques",
    name: "fsl_motion_outliers",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslMotionOutliersParameters {
    "__STYXTYPE__": "fsl_motion_outliers";
    "input_4d_image": InputPathType;
    "output_confound_file": string;
    "mask_image"?: InputPathType | null | undefined;
    "save_metric_file"?: string | null | undefined;
    "save_metric_plot"?: string | null | undefined;
    "temp_path"?: string | null | undefined;
    "refrms_flag": boolean;
    "dvars_flag": boolean;
    "refmse_flag": boolean;
    "fd_flag": boolean;
    "fdrms_flag": boolean;
    "abs_thresh"?: number | null | undefined;
    "no_moco_flag": boolean;
    "dummy_scans"?: number | null | undefined;
    "verbose_flag": boolean;
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
        "fsl_motion_outliers": fsl_motion_outliers_cargs,
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
        "fsl_motion_outliers": fsl_motion_outliers_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_motion_outliers(...)`.
 *
 * @interface
 */
interface FslMotionOutliersOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main output confound file
     */
    output_confound_file: OutputPathType;
    /**
     * Metric values saved as text file
     */
    metric_text_file: OutputPathType | null;
    /**
     * Metric values saved as graphical plot (png format)
     */
    metric_plot_file: OutputPathType | null;
}


function fsl_motion_outliers_params(
    input_4d_image: InputPathType,
    output_confound_file: string,
    mask_image: InputPathType | null = null,
    save_metric_file: string | null = null,
    save_metric_plot: string | null = null,
    temp_path: string | null = null,
    refrms_flag: boolean = false,
    dvars_flag: boolean = false,
    refmse_flag: boolean = false,
    fd_flag: boolean = false,
    fdrms_flag: boolean = false,
    abs_thresh: number | null = null,
    no_moco_flag: boolean = false,
    dummy_scans: number | null = null,
    verbose_flag: boolean = false,
): FslMotionOutliersParameters {
    /**
     * Build parameters.
    
     * @param input_4d_image Input 4D image (e.g. 4D.nii.gz)
     * @param output_confound_file Output confound file (e.g. confounds.txt)
     * @param mask_image Use supplied mask image for calculating metric
     * @param save_metric_file Save metric values (e.g. DVARS) as text into specified file
     * @param save_metric_plot Save metric values (e.g. DVARS) as a graphical plot (png format)
     * @param temp_path [Optional] Path to the location where temporary files should be created. Defaults to /tmp
     * @param refrms_flag Use RMS intensity difference to reference volume as metric
     * @param dvars_flag Use DVARS as metric
     * @param refmse_flag Mean Square Error version of --refrms (used in original version of fsl_motion_outliers)
     * @param fd_flag Use FD (framewise displacement) as metric
     * @param fdrms_flag Use FD with RMS matrix calculation as metric
     * @param abs_thresh Specify absolute threshold value (otherwise use box-plot cutoff = P75 + 1.5*IQR)
     * @param no_moco_flag Do not run motion correction (assumed already done)
     * @param dummy_scans Specify number of dummy scans to delete (before running anything and creating EVs)
     * @param verbose_flag Verbose mode
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_motion_outliers" as const,
        "input_4d_image": input_4d_image,
        "output_confound_file": output_confound_file,
        "refrms_flag": refrms_flag,
        "dvars_flag": dvars_flag,
        "refmse_flag": refmse_flag,
        "fd_flag": fd_flag,
        "fdrms_flag": fdrms_flag,
        "no_moco_flag": no_moco_flag,
        "verbose_flag": verbose_flag,
    };
    if (mask_image !== null) {
        params["mask_image"] = mask_image;
    }
    if (save_metric_file !== null) {
        params["save_metric_file"] = save_metric_file;
    }
    if (save_metric_plot !== null) {
        params["save_metric_plot"] = save_metric_plot;
    }
    if (temp_path !== null) {
        params["temp_path"] = temp_path;
    }
    if (abs_thresh !== null) {
        params["abs_thresh"] = abs_thresh;
    }
    if (dummy_scans !== null) {
        params["dummy_scans"] = dummy_scans;
    }
    return params;
}


function fsl_motion_outliers_cargs(
    params: FslMotionOutliersParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_motion_outliers");
    cargs.push(
        "-i",
        execution.inputFile((params["input_4d_image"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_confound_file"] ?? null)
    );
    if ((params["mask_image"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_image"] ?? null))
        );
    }
    if ((params["save_metric_file"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["save_metric_file"] ?? null)
        );
    }
    if ((params["save_metric_plot"] ?? null) !== null) {
        cargs.push(
            "-p",
            (params["save_metric_plot"] ?? null)
        );
    }
    if ((params["temp_path"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["temp_path"] ?? null)
        );
    }
    if ((params["refrms_flag"] ?? null)) {
        cargs.push("--refrms");
    }
    if ((params["dvars_flag"] ?? null)) {
        cargs.push("--dvars");
    }
    if ((params["refmse_flag"] ?? null)) {
        cargs.push("--refmse");
    }
    if ((params["fd_flag"] ?? null)) {
        cargs.push("--fd");
    }
    if ((params["fdrms_flag"] ?? null)) {
        cargs.push("--fdrms");
    }
    if ((params["abs_thresh"] ?? null) !== null) {
        cargs.push(
            "--thresh",
            String((params["abs_thresh"] ?? null))
        );
    }
    if ((params["no_moco_flag"] ?? null)) {
        cargs.push("--nomoco");
    }
    if ((params["dummy_scans"] ?? null) !== null) {
        cargs.push(
            "--dummy",
            String((params["dummy_scans"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function fsl_motion_outliers_outputs(
    params: FslMotionOutliersParameters,
    execution: Execution,
): FslMotionOutliersOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslMotionOutliersOutputs = {
        root: execution.outputFile("."),
        output_confound_file: execution.outputFile([(params["output_confound_file"] ?? null)].join('')),
        metric_text_file: ((params["save_metric_file"] ?? null) !== null) ? execution.outputFile([(params["save_metric_file"] ?? null)].join('')) : null,
        metric_plot_file: ((params["save_metric_plot"] ?? null) !== null) ? execution.outputFile([(params["save_metric_plot"] ?? null)].join('')) : null,
    };
    return ret;
}


function fsl_motion_outliers_execute(
    params: FslMotionOutliersParameters,
    execution: Execution,
): FslMotionOutliersOutputs {
    /**
     * FSL tool used to calculate motion outliers in 4D image data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslMotionOutliersOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_motion_outliers_cargs(params, execution)
    const ret = fsl_motion_outliers_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_motion_outliers(
    input_4d_image: InputPathType,
    output_confound_file: string,
    mask_image: InputPathType | null = null,
    save_metric_file: string | null = null,
    save_metric_plot: string | null = null,
    temp_path: string | null = null,
    refrms_flag: boolean = false,
    dvars_flag: boolean = false,
    refmse_flag: boolean = false,
    fd_flag: boolean = false,
    fdrms_flag: boolean = false,
    abs_thresh: number | null = null,
    no_moco_flag: boolean = false,
    dummy_scans: number | null = null,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): FslMotionOutliersOutputs {
    /**
     * FSL tool used to calculate motion outliers in 4D image data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_4d_image Input 4D image (e.g. 4D.nii.gz)
     * @param output_confound_file Output confound file (e.g. confounds.txt)
     * @param mask_image Use supplied mask image for calculating metric
     * @param save_metric_file Save metric values (e.g. DVARS) as text into specified file
     * @param save_metric_plot Save metric values (e.g. DVARS) as a graphical plot (png format)
     * @param temp_path [Optional] Path to the location where temporary files should be created. Defaults to /tmp
     * @param refrms_flag Use RMS intensity difference to reference volume as metric
     * @param dvars_flag Use DVARS as metric
     * @param refmse_flag Mean Square Error version of --refrms (used in original version of fsl_motion_outliers)
     * @param fd_flag Use FD (framewise displacement) as metric
     * @param fdrms_flag Use FD with RMS matrix calculation as metric
     * @param abs_thresh Specify absolute threshold value (otherwise use box-plot cutoff = P75 + 1.5*IQR)
     * @param no_moco_flag Do not run motion correction (assumed already done)
     * @param dummy_scans Specify number of dummy scans to delete (before running anything and creating EVs)
     * @param verbose_flag Verbose mode
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslMotionOutliersOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_MOTION_OUTLIERS_METADATA);
    const params = fsl_motion_outliers_params(input_4d_image, output_confound_file, mask_image, save_metric_file, save_metric_plot, temp_path, refrms_flag, dvars_flag, refmse_flag, fd_flag, fdrms_flag, abs_thresh, no_moco_flag, dummy_scans, verbose_flag)
    return fsl_motion_outliers_execute(params, execution);
}


export {
      FSL_MOTION_OUTLIERS_METADATA,
      FslMotionOutliersOutputs,
      FslMotionOutliersParameters,
      fsl_motion_outliers,
      fsl_motion_outliers_params,
};
