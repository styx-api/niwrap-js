// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_SEGHEAD_METADATA: Metadata = {
    id: "29243d057d462fb3947a2eddc11eb29fdf573280.boutiques",
    name: "mri_seghead",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriSegheadParameters {
    "__STYXTYPE__": "mri_seghead";
    "input_volume": string;
    "output_volume": string;
    "fill_value"?: number | null | undefined;
    "fhi_value"?: number | null | undefined;
    "thresh1_value"?: number | null | undefined;
    "thresh2_value"?: number | null | undefined;
    "threshold"?: number | null | undefined;
    "nhitsmin_value"?: number | null | undefined;
    "hvoldat_file"?: InputPathType | null | undefined;
    "signal_behind_head": boolean;
    "rescale": boolean;
    "fill_holes_islands": boolean;
    "seed_point"?: Array<number> | null | undefined;
    "or_mask_file"?: InputPathType | null | undefined;
    "gdiag_option"?: string | null | undefined;
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
        "mri_seghead": mri_seghead_cargs,
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
 * Output object returned when calling `mri_seghead(...)`.
 *
 * @interface
 */
interface MriSegheadOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_seghead_params(
    input_volume: string,
    output_volume: string,
    fill_value: number | null = null,
    fhi_value: number | null = null,
    thresh1_value: number | null = null,
    thresh2_value: number | null = null,
    threshold: number | null = null,
    nhitsmin_value: number | null = null,
    hvoldat_file: InputPathType | null = null,
    signal_behind_head: boolean = false,
    rescale: boolean = false,
    fill_holes_islands: boolean = false,
    seed_point: Array<number> | null = null,
    or_mask_file: InputPathType | null = null,
    gdiag_option: string | null = null,
): MriSegheadParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input volume identifier, e.g., T1.
     * @param output_volume Output volume identifier.
     * @param fill_value Fill value for binarizing the head (default 255).
     * @param fhi_value FHI value used in type change operation (default 0.999).
     * @param thresh1_value Threshold value for detecting the skin (e.g., 20).
     * @param thresh2_value Threshold value for the final binarization (e.g., 20).
     * @param threshold Single threshold value applied to both thresh1 and thresh2.
     * @param nhitsmin_value Minimum number of consecutive hits needed to identify skin (default 2).
     * @param hvoldat_file File to write the volume of the head in mm3 to an ASCII file.
     * @param signal_behind_head Consider signals behind the head in the binarization process.
     * @param rescale Rescale the input when converting to uchar.
     * @param fill_holes_islands Fill holes and remove islands in the binary volume.
     * @param seed_point Seed point specified by column, row, slice for filling operation.
     * @param or_mask_file Mask file to include voxels in the binarization process.
     * @param gdiag_option Optional diagnostic option for internal use.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_seghead" as const,
        "input_volume": input_volume,
        "output_volume": output_volume,
        "signal_behind_head": signal_behind_head,
        "rescale": rescale,
        "fill_holes_islands": fill_holes_islands,
    };
    if (fill_value !== null) {
        params["fill_value"] = fill_value;
    }
    if (fhi_value !== null) {
        params["fhi_value"] = fhi_value;
    }
    if (thresh1_value !== null) {
        params["thresh1_value"] = thresh1_value;
    }
    if (thresh2_value !== null) {
        params["thresh2_value"] = thresh2_value;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (nhitsmin_value !== null) {
        params["nhitsmin_value"] = nhitsmin_value;
    }
    if (hvoldat_file !== null) {
        params["hvoldat_file"] = hvoldat_file;
    }
    if (seed_point !== null) {
        params["seed_point"] = seed_point;
    }
    if (or_mask_file !== null) {
        params["or_mask_file"] = or_mask_file;
    }
    if (gdiag_option !== null) {
        params["gdiag_option"] = gdiag_option;
    }
    return params;
}


function mri_seghead_cargs(
    params: MriSegheadParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_seghead");
    cargs.push(
        "--invol",
        (params["input_volume"] ?? null)
    );
    cargs.push(
        "--outvol",
        (params["output_volume"] ?? null)
    );
    if ((params["fill_value"] ?? null) !== null) {
        cargs.push(
            "--fill",
            String((params["fill_value"] ?? null))
        );
    }
    if ((params["fhi_value"] ?? null) !== null) {
        cargs.push(
            "--fhi",
            String((params["fhi_value"] ?? null))
        );
    }
    if ((params["thresh1_value"] ?? null) !== null) {
        cargs.push(
            "--thresh1",
            String((params["thresh1_value"] ?? null))
        );
    }
    if ((params["thresh2_value"] ?? null) !== null) {
        cargs.push(
            "--thresh2",
            String((params["thresh2_value"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "--thresh",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["nhitsmin_value"] ?? null) !== null) {
        cargs.push(
            "--nhitsmin",
            String((params["nhitsmin_value"] ?? null))
        );
    }
    if ((params["hvoldat_file"] ?? null) !== null) {
        cargs.push(
            "--hvoldat",
            execution.inputFile((params["hvoldat_file"] ?? null))
        );
    }
    if ((params["signal_behind_head"] ?? null)) {
        cargs.push("--get-signal-behind-head");
    }
    if ((params["rescale"] ?? null)) {
        cargs.push("--rescale");
    }
    if ((params["fill_holes_islands"] ?? null)) {
        cargs.push("--fill-holes-islands");
    }
    if ((params["seed_point"] ?? null) !== null) {
        cargs.push(
            "--seed",
            ...(params["seed_point"] ?? null).map(String)
        );
    }
    if ((params["or_mask_file"] ?? null) !== null) {
        cargs.push(
            "--or-mask",
            execution.inputFile((params["or_mask_file"] ?? null))
        );
    }
    if ((params["gdiag_option"] ?? null) !== null) {
        cargs.push(
            "--gdiag",
            (params["gdiag_option"] ?? null)
        );
    }
    return cargs;
}


function mri_seghead_outputs(
    params: MriSegheadParameters,
    execution: Execution,
): MriSegheadOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriSegheadOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_seghead_execute(
    params: MriSegheadParameters,
    execution: Execution,
): MriSegheadOutputs {
    /**
     * Binarizes an input volume to identify the head's voxels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriSegheadOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_seghead_cargs(params, execution)
    const ret = mri_seghead_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_seghead(
    input_volume: string,
    output_volume: string,
    fill_value: number | null = null,
    fhi_value: number | null = null,
    thresh1_value: number | null = null,
    thresh2_value: number | null = null,
    threshold: number | null = null,
    nhitsmin_value: number | null = null,
    hvoldat_file: InputPathType | null = null,
    signal_behind_head: boolean = false,
    rescale: boolean = false,
    fill_holes_islands: boolean = false,
    seed_point: Array<number> | null = null,
    or_mask_file: InputPathType | null = null,
    gdiag_option: string | null = null,
    runner: Runner | null = null,
): MriSegheadOutputs {
    /**
     * Binarizes an input volume to identify the head's voxels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input volume identifier, e.g., T1.
     * @param output_volume Output volume identifier.
     * @param fill_value Fill value for binarizing the head (default 255).
     * @param fhi_value FHI value used in type change operation (default 0.999).
     * @param thresh1_value Threshold value for detecting the skin (e.g., 20).
     * @param thresh2_value Threshold value for the final binarization (e.g., 20).
     * @param threshold Single threshold value applied to both thresh1 and thresh2.
     * @param nhitsmin_value Minimum number of consecutive hits needed to identify skin (default 2).
     * @param hvoldat_file File to write the volume of the head in mm3 to an ASCII file.
     * @param signal_behind_head Consider signals behind the head in the binarization process.
     * @param rescale Rescale the input when converting to uchar.
     * @param fill_holes_islands Fill holes and remove islands in the binary volume.
     * @param seed_point Seed point specified by column, row, slice for filling operation.
     * @param or_mask_file Mask file to include voxels in the binarization process.
     * @param gdiag_option Optional diagnostic option for internal use.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriSegheadOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_SEGHEAD_METADATA);
    const params = mri_seghead_params(input_volume, output_volume, fill_value, fhi_value, thresh1_value, thresh2_value, threshold, nhitsmin_value, hvoldat_file, signal_behind_head, rescale, fill_holes_islands, seed_point, or_mask_file, gdiag_option)
    return mri_seghead_execute(params, execution);
}


export {
      MRI_SEGHEAD_METADATA,
      MriSegheadOutputs,
      MriSegheadParameters,
      mri_seghead,
      mri_seghead_params,
};
