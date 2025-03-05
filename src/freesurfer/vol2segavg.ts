// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOL2SEGAVG_METADATA: Metadata = {
    id: "9d9d31cfe51a606166834e1114b170012714797f.boutiques",
    name: "vol2segavg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Vol2segavgParameters {
    "__STYXTYPE__": "vol2segavg";
    "output_file": string;
    "input_volume": InputPathType;
    "registration": string;
    "segmentation_file": InputPathType;
    "aparc_aseg_flag": boolean;
    "subject_id"?: string | null | undefined;
    "segmentation_id"?: Array<number> | null | undefined;
    "multiply_value"?: number | null | undefined;
    "no_bb_flag": boolean;
    "erode_value"?: number | null | undefined;
    "dilate_value"?: number | null | undefined;
    "wm_flag": boolean;
    "vcsf_flag": boolean;
    "xcsf_flag": boolean;
    "remove_mean_flag": boolean;
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
        "vol2segavg": vol2segavg_cargs,
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
        "vol2segavg": vol2segavg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `vol2segavg(...)`.
 *
 * @interface
 */
interface Vol2segavgOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing the computed average
     */
    output_file: OutputPathType;
}


function vol2segavg_params(
    output_file: string,
    input_volume: InputPathType,
    registration: string,
    segmentation_file: InputPathType,
    aparc_aseg_flag: boolean = false,
    subject_id: string | null = null,
    segmentation_id: Array<number> | null = null,
    multiply_value: number | null = null,
    no_bb_flag: boolean = false,
    erode_value: number | null = null,
    dilate_value: number | null = null,
    wm_flag: boolean = false,
    vcsf_flag: boolean = false,
    xcsf_flag: boolean = false,
    remove_mean_flag: boolean = false,
): Vol2segavgParameters {
    /**
     * Build parameters.
    
     * @param output_file Output file, can be .txt or a binary (e.g., .nii, .mgh)
     * @param input_volume Input volume file (e.g., vol.nii)
     * @param registration Registration file, can be reg.dat or use --regheader
     * @param segmentation_file Segmentation file (e.g., seg.mgz)
     * @param aparc_aseg_flag Use aparc+aseg flag
     * @param subject_id Subject ID, may be needed if --reg not supplied
     * @param segmentation_id Segmentation ID(s). Multiple IDs can be supplied.
     * @param multiply_value Multiply input by MulVal
     * @param no_bb_flag Do not use bounding box
     * @param erode_value Erode segmentation
     * @param dilate_value Dilate segmentation
     * @param wm_flag Sets segid to 2, 41, 7, 46, 251, 252, 253, 254, 255, 77, 78, 79 and use aparc+aseg
     * @param vcsf_flag Sets segid to 4, 5, 43, 44, 31, 63 and use aparc+aseg
     * @param xcsf_flag Sets segid to 257 and use apas+head
     * @param remove_mean_flag Remove mean from time course
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "vol2segavg" as const,
        "output_file": output_file,
        "input_volume": input_volume,
        "registration": registration,
        "segmentation_file": segmentation_file,
        "aparc_aseg_flag": aparc_aseg_flag,
        "no_bb_flag": no_bb_flag,
        "wm_flag": wm_flag,
        "vcsf_flag": vcsf_flag,
        "xcsf_flag": xcsf_flag,
        "remove_mean_flag": remove_mean_flag,
    };
    if (subject_id !== null) {
        params["subject_id"] = subject_id;
    }
    if (segmentation_id !== null) {
        params["segmentation_id"] = segmentation_id;
    }
    if (multiply_value !== null) {
        params["multiply_value"] = multiply_value;
    }
    if (erode_value !== null) {
        params["erode_value"] = erode_value;
    }
    if (dilate_value !== null) {
        params["dilate_value"] = dilate_value;
    }
    return params;
}


function vol2segavg_cargs(
    params: Vol2segavgParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("vol2segavg");
    cargs.push(
        "--o",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "--i",
        execution.inputFile((params["input_volume"] ?? null))
    );
    cargs.push(
        "--reg",
        (params["registration"] ?? null)
    );
    cargs.push(
        "--seg",
        execution.inputFile((params["segmentation_file"] ?? null))
    );
    if ((params["aparc_aseg_flag"] ?? null)) {
        cargs.push("--aparc+aseg");
    }
    if ((params["subject_id"] ?? null) !== null) {
        cargs.push(
            "--s",
            (params["subject_id"] ?? null)
        );
    }
    if ((params["segmentation_id"] ?? null) !== null) {
        cargs.push(
            "--segid",
            ...(params["segmentation_id"] ?? null).map(String)
        );
    }
    if ((params["multiply_value"] ?? null) !== null) {
        cargs.push(
            "--mul",
            String((params["multiply_value"] ?? null))
        );
    }
    if ((params["no_bb_flag"] ?? null)) {
        cargs.push("--no-bb");
    }
    if ((params["erode_value"] ?? null) !== null) {
        cargs.push(
            "--erode",
            String((params["erode_value"] ?? null))
        );
    }
    if ((params["dilate_value"] ?? null) !== null) {
        cargs.push(
            "--dilate",
            String((params["dilate_value"] ?? null))
        );
    }
    if ((params["wm_flag"] ?? null)) {
        cargs.push("--wm");
    }
    if ((params["vcsf_flag"] ?? null)) {
        cargs.push("--vcsf");
    }
    if ((params["xcsf_flag"] ?? null)) {
        cargs.push("--xcsf");
    }
    if ((params["remove_mean_flag"] ?? null)) {
        cargs.push("--remove-mean");
    }
    return cargs;
}


function vol2segavg_outputs(
    params: Vol2segavgParameters,
    execution: Execution,
): Vol2segavgOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Vol2segavgOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function vol2segavg_execute(
    params: Vol2segavgParameters,
    execution: Execution,
): Vol2segavgOutputs {
    /**
     * Computes the average of a volume inside a given segment of a segmentation resampling the input volume to the segmentation space.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Vol2segavgOutputs`).
     */
    params = execution.params(params)
    const cargs = vol2segavg_cargs(params, execution)
    const ret = vol2segavg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function vol2segavg(
    output_file: string,
    input_volume: InputPathType,
    registration: string,
    segmentation_file: InputPathType,
    aparc_aseg_flag: boolean = false,
    subject_id: string | null = null,
    segmentation_id: Array<number> | null = null,
    multiply_value: number | null = null,
    no_bb_flag: boolean = false,
    erode_value: number | null = null,
    dilate_value: number | null = null,
    wm_flag: boolean = false,
    vcsf_flag: boolean = false,
    xcsf_flag: boolean = false,
    remove_mean_flag: boolean = false,
    runner: Runner | null = null,
): Vol2segavgOutputs {
    /**
     * Computes the average of a volume inside a given segment of a segmentation resampling the input volume to the segmentation space.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_file Output file, can be .txt or a binary (e.g., .nii, .mgh)
     * @param input_volume Input volume file (e.g., vol.nii)
     * @param registration Registration file, can be reg.dat or use --regheader
     * @param segmentation_file Segmentation file (e.g., seg.mgz)
     * @param aparc_aseg_flag Use aparc+aseg flag
     * @param subject_id Subject ID, may be needed if --reg not supplied
     * @param segmentation_id Segmentation ID(s). Multiple IDs can be supplied.
     * @param multiply_value Multiply input by MulVal
     * @param no_bb_flag Do not use bounding box
     * @param erode_value Erode segmentation
     * @param dilate_value Dilate segmentation
     * @param wm_flag Sets segid to 2, 41, 7, 46, 251, 252, 253, 254, 255, 77, 78, 79 and use aparc+aseg
     * @param vcsf_flag Sets segid to 4, 5, 43, 44, 31, 63 and use aparc+aseg
     * @param xcsf_flag Sets segid to 257 and use apas+head
     * @param remove_mean_flag Remove mean from time course
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Vol2segavgOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOL2SEGAVG_METADATA);
    const params = vol2segavg_params(output_file, input_volume, registration, segmentation_file, aparc_aseg_flag, subject_id, segmentation_id, multiply_value, no_bb_flag, erode_value, dilate_value, wm_flag, vcsf_flag, xcsf_flag, remove_mean_flag)
    return vol2segavg_execute(params, execution);
}


export {
      VOL2SEGAVG_METADATA,
      Vol2segavgOutputs,
      Vol2segavgParameters,
      vol2segavg,
      vol2segavg_params,
};
