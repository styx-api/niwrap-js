// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const OXFORD_ASL_METADATA: Metadata = {
    id: "bdbf1ed97eaa86bb7fae170ece4a5bc7b7b7a7f8.boutiques",
    name: "oxford_asl",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface OxfordAslParameters {
    "__STYXTYPE__": "oxford_asl";
    "asl_data": InputPathType;
    "output_dir_name": string;
    "mask"?: InputPathType | null | undefined;
    "spatial_smoothing": boolean;
    "white_paper_analysis": boolean;
    "motion_correction": boolean;
    "input_asl_format"?: string | null | undefined;
    "input_block_format"?: string | null | undefined;
    "inversion_times"?: string | null | undefined;
    "ti_image"?: InputPathType | null | undefined;
    "casl": boolean;
    "arterial_suppression": boolean;
    "bolus_duration"?: number | null | undefined;
    "bat"?: number | null | undefined;
    "tissue_t1"?: number | null | undefined;
    "blood_t1"?: number | null | undefined;
    "slice_timing_difference"?: number | null | undefined;
    "slice_band"?: number | null | undefined;
    "flip_angle"?: number | null | undefined;
    "fsl_anat_dir"?: string | null | undefined;
    "structural_image"?: InputPathType | null | undefined;
    "bet_structural_image"?: InputPathType | null | undefined;
    "fast_segmentation_images"?: string | null | undefined;
    "sensitivity_correction": boolean;
    "precomputed_m0_value"?: number | null | undefined;
    "inversion_efficiency"?: number | null | undefined;
    "tr_calibration_data"?: number | null | undefined;
    "calibration_image"?: InputPathType | null | undefined;
    "calibration_method"?: string | null | undefined;
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
        "oxford_asl": oxford_asl_cargs,
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
        "oxford_asl": oxford_asl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `oxford_asl(...)`.
 *
 * @interface
 */
interface OxfordAslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Directory containing the output files
     */
    output_dir: OutputPathType;
}


function oxford_asl_params(
    asl_data: InputPathType,
    output_dir_name: string,
    mask: InputPathType | null = null,
    spatial_smoothing: boolean = false,
    white_paper_analysis: boolean = false,
    motion_correction: boolean = false,
    input_asl_format: string | null = null,
    input_block_format: string | null = null,
    inversion_times: string | null = null,
    ti_image: InputPathType | null = null,
    casl: boolean = false,
    arterial_suppression: boolean = false,
    bolus_duration: number | null = null,
    bat: number | null = null,
    tissue_t1: number | null = null,
    blood_t1: number | null = null,
    slice_timing_difference: number | null = null,
    slice_band: number | null = null,
    flip_angle: number | null = null,
    fsl_anat_dir: string | null = null,
    structural_image: InputPathType | null = null,
    bet_structural_image: InputPathType | null = null,
    fast_segmentation_images: string | null = null,
    sensitivity_correction: boolean = false,
    precomputed_m0_value: number | null = null,
    inversion_efficiency: number | null = null,
    tr_calibration_data: number | null = null,
    calibration_image: InputPathType | null = null,
    calibration_method: string | null = null,
): OxfordAslParameters {
    /**
     * Build parameters.
    
     * @param asl_data Input ASL data
     * @param output_dir_name Output directory name
     * @param mask Mask in native space of ASL data
     * @param spatial_smoothing Use adaptive spatial smoothing on perfusion
     * @param white_paper_analysis Analysis that conforms to the 'white paper' (Alsop et al. 2014)
     * @param motion_correction Apply motion correction using mcflirt
     * @param input_asl_format Input ASL format: diff, tc, ct
     * @param input_block_format Input block format (for multi-TI): rpt, tis
     * @param inversion_times Comma separated list of inversion times
     * @param ti_image 4D image containing voxelwise TI values
     * @param casl ASL acquisition is pseudo cASL (pcASL) rather than pASL
     * @param arterial_suppression Arterial suppression (vascular crushing) was used
     * @param bolus_duration Bolus duration
     * @param bat Bolus arrival time
     * @param tissue_t1 Tissue T1 value
     * @param blood_t1 Blood T1 value
     * @param slice_timing_difference Timing difference between slices
     * @param slice_band Number of slices per band in a multi-band setup
     * @param flip_angle Flip angle for Look-Locker readout correction
     * @param fsl_anat_dir An fsl_anat directory from structural image
     * @param structural_image Structural image (whole head)
     * @param bet_structural_image Structural image (already BETed)
     * @param fast_segmentation_images Images from a FAST segmentation
     * @param sensitivity_correction Use bias field (from segmentation) for sensitivity correction
     * @param precomputed_m0_value Single precomputed M0 value
     * @param inversion_efficiency Inversion efficiency
     * @param tr_calibration_data TR of calibration data
     * @param calibration_image M0 calibration image (proton density or mean control image)
     * @param calibration_method Calibration method: single or voxel
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "oxford_asl" as const,
        "asl_data": asl_data,
        "output_dir_name": output_dir_name,
        "spatial_smoothing": spatial_smoothing,
        "white_paper_analysis": white_paper_analysis,
        "motion_correction": motion_correction,
        "casl": casl,
        "arterial_suppression": arterial_suppression,
        "sensitivity_correction": sensitivity_correction,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (input_asl_format !== null) {
        params["input_asl_format"] = input_asl_format;
    }
    if (input_block_format !== null) {
        params["input_block_format"] = input_block_format;
    }
    if (inversion_times !== null) {
        params["inversion_times"] = inversion_times;
    }
    if (ti_image !== null) {
        params["ti_image"] = ti_image;
    }
    if (bolus_duration !== null) {
        params["bolus_duration"] = bolus_duration;
    }
    if (bat !== null) {
        params["bat"] = bat;
    }
    if (tissue_t1 !== null) {
        params["tissue_t1"] = tissue_t1;
    }
    if (blood_t1 !== null) {
        params["blood_t1"] = blood_t1;
    }
    if (slice_timing_difference !== null) {
        params["slice_timing_difference"] = slice_timing_difference;
    }
    if (slice_band !== null) {
        params["slice_band"] = slice_band;
    }
    if (flip_angle !== null) {
        params["flip_angle"] = flip_angle;
    }
    if (fsl_anat_dir !== null) {
        params["fsl_anat_dir"] = fsl_anat_dir;
    }
    if (structural_image !== null) {
        params["structural_image"] = structural_image;
    }
    if (bet_structural_image !== null) {
        params["bet_structural_image"] = bet_structural_image;
    }
    if (fast_segmentation_images !== null) {
        params["fast_segmentation_images"] = fast_segmentation_images;
    }
    if (precomputed_m0_value !== null) {
        params["precomputed_m0_value"] = precomputed_m0_value;
    }
    if (inversion_efficiency !== null) {
        params["inversion_efficiency"] = inversion_efficiency;
    }
    if (tr_calibration_data !== null) {
        params["tr_calibration_data"] = tr_calibration_data;
    }
    if (calibration_image !== null) {
        params["calibration_image"] = calibration_image;
    }
    if (calibration_method !== null) {
        params["calibration_method"] = calibration_method;
    }
    return params;
}


function oxford_asl_cargs(
    params: OxfordAslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("oxford_asl");
    cargs.push(
        "-i",
        execution.inputFile((params["asl_data"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_dir_name"] ?? null)
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["spatial_smoothing"] ?? null)) {
        cargs.push("--spatial");
    }
    if ((params["white_paper_analysis"] ?? null)) {
        cargs.push("--wp");
    }
    if ((params["motion_correction"] ?? null)) {
        cargs.push("--mc");
    }
    if ((params["input_asl_format"] ?? null) !== null) {
        cargs.push(
            "--iaf",
            (params["input_asl_format"] ?? null)
        );
    }
    if ((params["input_block_format"] ?? null) !== null) {
        cargs.push(
            "--ibf",
            (params["input_block_format"] ?? null)
        );
    }
    if ((params["inversion_times"] ?? null) !== null) {
        cargs.push(
            "--tis",
            (params["inversion_times"] ?? null)
        );
    }
    if ((params["ti_image"] ?? null) !== null) {
        cargs.push(
            "--tiimg",
            execution.inputFile((params["ti_image"] ?? null))
        );
    }
    if ((params["casl"] ?? null)) {
        cargs.push("--casl");
    }
    if ((params["arterial_suppression"] ?? null)) {
        cargs.push("--artsupp");
    }
    if ((params["bolus_duration"] ?? null) !== null) {
        cargs.push(
            "--bolus",
            String((params["bolus_duration"] ?? null))
        );
    }
    if ((params["bat"] ?? null) !== null) {
        cargs.push(
            "--bat",
            String((params["bat"] ?? null))
        );
    }
    if ((params["tissue_t1"] ?? null) !== null) {
        cargs.push(
            "--t1",
            String((params["tissue_t1"] ?? null))
        );
    }
    if ((params["blood_t1"] ?? null) !== null) {
        cargs.push(
            "--t1b",
            String((params["blood_t1"] ?? null))
        );
    }
    if ((params["slice_timing_difference"] ?? null) !== null) {
        cargs.push(
            "--slicedt",
            String((params["slice_timing_difference"] ?? null))
        );
    }
    if ((params["slice_band"] ?? null) !== null) {
        cargs.push(
            "--sliceband",
            String((params["slice_band"] ?? null))
        );
    }
    if ((params["flip_angle"] ?? null) !== null) {
        cargs.push(
            "--fa",
            String((params["flip_angle"] ?? null))
        );
    }
    if ((params["fsl_anat_dir"] ?? null) !== null) {
        cargs.push(
            "--fslanat",
            (params["fsl_anat_dir"] ?? null)
        );
    }
    if ((params["structural_image"] ?? null) !== null) {
        cargs.push(
            "-s",
            execution.inputFile((params["structural_image"] ?? null))
        );
    }
    if ((params["bet_structural_image"] ?? null) !== null) {
        cargs.push(
            "--sbrain",
            execution.inputFile((params["bet_structural_image"] ?? null))
        );
    }
    if ((params["fast_segmentation_images"] ?? null) !== null) {
        cargs.push(
            "--fastsrc",
            (params["fast_segmentation_images"] ?? null)
        );
    }
    if ((params["sensitivity_correction"] ?? null)) {
        cargs.push("--senscorr");
    }
    if ((params["precomputed_m0_value"] ?? null) !== null) {
        cargs.push(
            "--M0",
            String((params["precomputed_m0_value"] ?? null))
        );
    }
    if ((params["inversion_efficiency"] ?? null) !== null) {
        cargs.push(
            "--alpha",
            String((params["inversion_efficiency"] ?? null))
        );
    }
    if ((params["tr_calibration_data"] ?? null) !== null) {
        cargs.push(
            "--tr",
            String((params["tr_calibration_data"] ?? null))
        );
    }
    if ((params["calibration_image"] ?? null) !== null) {
        cargs.push(
            "-c",
            execution.inputFile((params["calibration_image"] ?? null))
        );
    }
    if ((params["calibration_method"] ?? null) !== null) {
        cargs.push(
            "--cmethod",
            (params["calibration_method"] ?? null)
        );
    }
    return cargs;
}


function oxford_asl_outputs(
    params: OxfordAslParameters,
    execution: Execution,
): OxfordAslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: OxfordAslOutputs = {
        root: execution.outputFile("."),
        output_dir: execution.outputFile([(params["output_dir_name"] ?? null)].join('')),
    };
    return ret;
}


function oxford_asl_execute(
    params: OxfordAslParameters,
    execution: Execution,
): OxfordAslOutputs {
    /**
     * Calculate perfusion maps from ASL data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `OxfordAslOutputs`).
     */
    params = execution.params(params)
    const cargs = oxford_asl_cargs(params, execution)
    const ret = oxford_asl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function oxford_asl(
    asl_data: InputPathType,
    output_dir_name: string,
    mask: InputPathType | null = null,
    spatial_smoothing: boolean = false,
    white_paper_analysis: boolean = false,
    motion_correction: boolean = false,
    input_asl_format: string | null = null,
    input_block_format: string | null = null,
    inversion_times: string | null = null,
    ti_image: InputPathType | null = null,
    casl: boolean = false,
    arterial_suppression: boolean = false,
    bolus_duration: number | null = null,
    bat: number | null = null,
    tissue_t1: number | null = null,
    blood_t1: number | null = null,
    slice_timing_difference: number | null = null,
    slice_band: number | null = null,
    flip_angle: number | null = null,
    fsl_anat_dir: string | null = null,
    structural_image: InputPathType | null = null,
    bet_structural_image: InputPathType | null = null,
    fast_segmentation_images: string | null = null,
    sensitivity_correction: boolean = false,
    precomputed_m0_value: number | null = null,
    inversion_efficiency: number | null = null,
    tr_calibration_data: number | null = null,
    calibration_image: InputPathType | null = null,
    calibration_method: string | null = null,
    runner: Runner | null = null,
): OxfordAslOutputs {
    /**
     * Calculate perfusion maps from ASL data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param asl_data Input ASL data
     * @param output_dir_name Output directory name
     * @param mask Mask in native space of ASL data
     * @param spatial_smoothing Use adaptive spatial smoothing on perfusion
     * @param white_paper_analysis Analysis that conforms to the 'white paper' (Alsop et al. 2014)
     * @param motion_correction Apply motion correction using mcflirt
     * @param input_asl_format Input ASL format: diff, tc, ct
     * @param input_block_format Input block format (for multi-TI): rpt, tis
     * @param inversion_times Comma separated list of inversion times
     * @param ti_image 4D image containing voxelwise TI values
     * @param casl ASL acquisition is pseudo cASL (pcASL) rather than pASL
     * @param arterial_suppression Arterial suppression (vascular crushing) was used
     * @param bolus_duration Bolus duration
     * @param bat Bolus arrival time
     * @param tissue_t1 Tissue T1 value
     * @param blood_t1 Blood T1 value
     * @param slice_timing_difference Timing difference between slices
     * @param slice_band Number of slices per band in a multi-band setup
     * @param flip_angle Flip angle for Look-Locker readout correction
     * @param fsl_anat_dir An fsl_anat directory from structural image
     * @param structural_image Structural image (whole head)
     * @param bet_structural_image Structural image (already BETed)
     * @param fast_segmentation_images Images from a FAST segmentation
     * @param sensitivity_correction Use bias field (from segmentation) for sensitivity correction
     * @param precomputed_m0_value Single precomputed M0 value
     * @param inversion_efficiency Inversion efficiency
     * @param tr_calibration_data TR of calibration data
     * @param calibration_image M0 calibration image (proton density or mean control image)
     * @param calibration_method Calibration method: single or voxel
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `OxfordAslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(OXFORD_ASL_METADATA);
    const params = oxford_asl_params(asl_data, output_dir_name, mask, spatial_smoothing, white_paper_analysis, motion_correction, input_asl_format, input_block_format, inversion_times, ti_image, casl, arterial_suppression, bolus_duration, bat, tissue_t1, blood_t1, slice_timing_difference, slice_band, flip_angle, fsl_anat_dir, structural_image, bet_structural_image, fast_segmentation_images, sensitivity_correction, precomputed_m0_value, inversion_efficiency, tr_calibration_data, calibration_image, calibration_method)
    return oxford_asl_execute(params, execution);
}


export {
      OXFORD_ASL_METADATA,
      OxfordAslOutputs,
      OxfordAslParameters,
      oxford_asl,
      oxford_asl_params,
};
