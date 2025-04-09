// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_COMPUTE_VOLUME_FRACTIONS_METADATA: Metadata = {
    id: "c96073b430ac3150fa69b6683b53f6001b13902e.boutiques",
    name: "mri_compute_volume_fractions",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriComputeVolumeFractionsParameters {
    "__STYXTYPE__": "mri_compute_volume_fractions";
    "output_stem": string;
    "registration_file"?: InputPathType | null | undefined;
    "regheader"?: string | null | undefined;
    "usf"?: number | null | undefined;
    "resolution"?: number | null | undefined;
    "resmm"?: number | null | undefined;
    "segmentation_file"?: InputPathType | null | undefined;
    "wsurf"?: string | null | undefined;
    "psurf"?: string | null | undefined;
    "no_aseg": boolean;
    "stackfile"?: string | null | undefined;
    "gmfile"?: string | null | undefined;
    "no_fill_csf": boolean;
    "dilation"?: number | null | undefined;
    "out_seg"?: string | null | undefined;
    "ttseg"?: string | null | undefined;
    "ttseg_ctab"?: string | null | undefined;
    "mgz_format": boolean;
    "mgh_format": boolean;
    "nii_format": boolean;
    "nii_gz_format": boolean;
    "ttype_head": boolean;
    "vg_thresh"?: number | null | undefined;
    "debug": boolean;
    "checkopts": boolean;
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
        "mri_compute_volume_fractions": mri_compute_volume_fractions_cargs,
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
        "mri_compute_volume_fractions": mri_compute_volume_fractions_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_compute_volume_fractions(...)`.
 *
 * @interface
 */
interface MriComputeVolumeFractionsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output cortex volume file.
     */
    output_cortex: OutputPathType;
    /**
     * Output subcortical gray matter volume file.
     */
    output_subcort_gm: OutputPathType;
    /**
     * Output white matter volume file.
     */
    output_wm: OutputPathType;
    /**
     * Output cerebrospinal fluid volume file.
     */
    output_csf: OutputPathType;
}


function mri_compute_volume_fractions_params(
    output_stem: string,
    registration_file: InputPathType | null = null,
    regheader: string | null = null,
    usf: number | null = null,
    resolution: number | null = null,
    resmm: number | null = null,
    segmentation_file: InputPathType | null = null,
    wsurf: string | null = null,
    psurf: string | null = null,
    no_aseg: boolean = false,
    stackfile: string | null = null,
    gmfile: string | null = null,
    no_fill_csf: boolean = false,
    dilation: number | null = null,
    out_seg: string | null = null,
    ttseg: string | null = null,
    ttseg_ctab: string | null = null,
    mgz_format: boolean = false,
    mgh_format: boolean = false,
    nii_format: boolean = false,
    nii_gz_format: boolean = false,
    ttype_head: boolean = false,
    vg_thresh: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
): MriComputeVolumeFractionsParameters {
    /**
     * Build parameters.
    
     * @param output_stem Output stem for generated files (e.g. cortex, subcort_gm, wm, csf). Files will be saved with this stem in different formats based on the selected flags.
     * @param registration_file Registration file (can be LTA or reg.dat). If using reg.dat, a template volume is needed.
     * @param regheader Specify the subject for regheader.
     * @param usf Set anatomical upsample factor (default is 2).
     * @param resolution Resolution setting. Sets USF to round(1/res).
     * @param resmm Set functional upsampling resolution (default is aseg->xsize/(USF)).
     * @param segmentation_file Use specified segmentation file instead of aseg.mgz.
     * @param wsurf Specify the white surface (default is 'white').
     * @param psurf Specify the pial surface (default is 'pial').
     * @param no_aseg Do not include aseg in processing (useful for testing).
     * @param stackfile Put cortex, subcortical GM, WM, CSF into a single multi-frame file.
     * @param gmfile Put cortex + subcortical GM into a single-frame file.
     * @param no_fill_csf Do not attempt to fill voxels surrounding segmentation with extracerebral CSF segmentation.
     * @param dilation For xCSF fill, dilate by specified number (default is 3). Use -1 to fill the entire volume.
     * @param out_seg Save segmentation (after adding xCSF voxels).
     * @param ttseg Save tissue type segmentation.
     * @param ttseg_ctab Save tissue type segmentation color table.
     * @param mgz_format Use MGZ format.
     * @param mgh_format Use MGH format.
     * @param nii_format Use NII format.
     * @param nii_gz_format Use NII.GZ format.
     * @param ttype_head Use default+head instead of default tissue type info for segmentation.
     * @param vg_thresh Threshold for 'ERROR: LTAconcat(): LTAs 0 and 1 do not match'.
     * @param debug Turn on debugging mode.
     * @param checkopts Do not run anything, just check options and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_compute_volume_fractions" as const,
        "output_stem": output_stem,
        "no_aseg": no_aseg,
        "no_fill_csf": no_fill_csf,
        "mgz_format": mgz_format,
        "mgh_format": mgh_format,
        "nii_format": nii_format,
        "nii_gz_format": nii_gz_format,
        "ttype_head": ttype_head,
        "debug": debug,
        "checkopts": checkopts,
    };
    if (registration_file !== null) {
        params["registration_file"] = registration_file;
    }
    if (regheader !== null) {
        params["regheader"] = regheader;
    }
    if (usf !== null) {
        params["usf"] = usf;
    }
    if (resolution !== null) {
        params["resolution"] = resolution;
    }
    if (resmm !== null) {
        params["resmm"] = resmm;
    }
    if (segmentation_file !== null) {
        params["segmentation_file"] = segmentation_file;
    }
    if (wsurf !== null) {
        params["wsurf"] = wsurf;
    }
    if (psurf !== null) {
        params["psurf"] = psurf;
    }
    if (stackfile !== null) {
        params["stackfile"] = stackfile;
    }
    if (gmfile !== null) {
        params["gmfile"] = gmfile;
    }
    if (dilation !== null) {
        params["dilation"] = dilation;
    }
    if (out_seg !== null) {
        params["out_seg"] = out_seg;
    }
    if (ttseg !== null) {
        params["ttseg"] = ttseg;
    }
    if (ttseg_ctab !== null) {
        params["ttseg_ctab"] = ttseg_ctab;
    }
    if (vg_thresh !== null) {
        params["vg_thresh"] = vg_thresh;
    }
    return params;
}


function mri_compute_volume_fractions_cargs(
    params: MriComputeVolumeFractionsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_compute_volume_fractions");
    cargs.push(
        "--o",
        (params["output_stem"] ?? null)
    );
    if ((params["registration_file"] ?? null) !== null) {
        cargs.push(
            "--reg",
            execution.inputFile((params["registration_file"] ?? null))
        );
    }
    if ((params["regheader"] ?? null) !== null) {
        cargs.push(
            "--regheader",
            (params["regheader"] ?? null)
        );
    }
    if ((params["usf"] ?? null) !== null) {
        cargs.push(
            "--usf",
            String((params["usf"] ?? null))
        );
    }
    if ((params["resolution"] ?? null) !== null) {
        cargs.push(
            "--r",
            String((params["resolution"] ?? null))
        );
    }
    if ((params["resmm"] ?? null) !== null) {
        cargs.push(
            "--resmm",
            String((params["resmm"] ?? null))
        );
    }
    if ((params["segmentation_file"] ?? null) !== null) {
        cargs.push(
            "--seg",
            execution.inputFile((params["segmentation_file"] ?? null))
        );
    }
    if ((params["wsurf"] ?? null) !== null) {
        cargs.push(
            "--wsurf",
            (params["wsurf"] ?? null)
        );
    }
    if ((params["psurf"] ?? null) !== null) {
        cargs.push(
            "--psurf",
            (params["psurf"] ?? null)
        );
    }
    if ((params["no_aseg"] ?? null)) {
        cargs.push("--no-aseg");
    }
    if ((params["stackfile"] ?? null) !== null) {
        cargs.push(
            "--stack",
            (params["stackfile"] ?? null)
        );
    }
    if ((params["gmfile"] ?? null) !== null) {
        cargs.push(
            "--gm",
            (params["gmfile"] ?? null)
        );
    }
    if ((params["no_fill_csf"] ?? null)) {
        cargs.push("--no-fill-csf");
    }
    if ((params["dilation"] ?? null) !== null) {
        cargs.push(
            "--dil",
            String((params["dilation"] ?? null))
        );
    }
    if ((params["out_seg"] ?? null) !== null) {
        cargs.push(
            "--out-seg",
            (params["out_seg"] ?? null)
        );
    }
    if ((params["ttseg"] ?? null) !== null) {
        cargs.push(
            "--ttseg",
            (params["ttseg"] ?? null)
        );
    }
    if ((params["ttseg_ctab"] ?? null) !== null) {
        cargs.push(
            "--ttseg-ctab",
            (params["ttseg_ctab"] ?? null)
        );
    }
    if ((params["mgz_format"] ?? null)) {
        cargs.push("--mgz");
    }
    if ((params["mgh_format"] ?? null)) {
        cargs.push("--mgh");
    }
    if ((params["nii_format"] ?? null)) {
        cargs.push("--nii");
    }
    if ((params["nii_gz_format"] ?? null)) {
        cargs.push("--nii.gz");
    }
    if ((params["ttype_head"] ?? null)) {
        cargs.push("--ttype+head");
    }
    if ((params["vg_thresh"] ?? null) !== null) {
        cargs.push(
            "--vg-thresh",
            String((params["vg_thresh"] ?? null))
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["checkopts"] ?? null)) {
        cargs.push("--checkopts");
    }
    return cargs;
}


function mri_compute_volume_fractions_outputs(
    params: MriComputeVolumeFractionsParameters,
    execution: Execution,
): MriComputeVolumeFractionsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriComputeVolumeFractionsOutputs = {
        root: execution.outputFile("."),
        output_cortex: execution.outputFile([(params["output_stem"] ?? null), ".cortex.mgz"].join('')),
        output_subcort_gm: execution.outputFile([(params["output_stem"] ?? null), ".subcort_gm.mgz"].join('')),
        output_wm: execution.outputFile([(params["output_stem"] ?? null), ".wm.mgz"].join('')),
        output_csf: execution.outputFile([(params["output_stem"] ?? null), ".csf.mgz"].join('')),
    };
    return ret;
}


function mri_compute_volume_fractions_execute(
    params: MriComputeVolumeFractionsParameters,
    execution: Execution,
): MriComputeVolumeFractionsOutputs {
    /**
     * Computes partial volume fractions for cortex, subcortical GM, WM and CSF.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriComputeVolumeFractionsOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_compute_volume_fractions_cargs(params, execution)
    const ret = mri_compute_volume_fractions_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_compute_volume_fractions(
    output_stem: string,
    registration_file: InputPathType | null = null,
    regheader: string | null = null,
    usf: number | null = null,
    resolution: number | null = null,
    resmm: number | null = null,
    segmentation_file: InputPathType | null = null,
    wsurf: string | null = null,
    psurf: string | null = null,
    no_aseg: boolean = false,
    stackfile: string | null = null,
    gmfile: string | null = null,
    no_fill_csf: boolean = false,
    dilation: number | null = null,
    out_seg: string | null = null,
    ttseg: string | null = null,
    ttseg_ctab: string | null = null,
    mgz_format: boolean = false,
    mgh_format: boolean = false,
    nii_format: boolean = false,
    nii_gz_format: boolean = false,
    ttype_head: boolean = false,
    vg_thresh: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
    runner: Runner | null = null,
): MriComputeVolumeFractionsOutputs {
    /**
     * Computes partial volume fractions for cortex, subcortical GM, WM and CSF.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_stem Output stem for generated files (e.g. cortex, subcort_gm, wm, csf). Files will be saved with this stem in different formats based on the selected flags.
     * @param registration_file Registration file (can be LTA or reg.dat). If using reg.dat, a template volume is needed.
     * @param regheader Specify the subject for regheader.
     * @param usf Set anatomical upsample factor (default is 2).
     * @param resolution Resolution setting. Sets USF to round(1/res).
     * @param resmm Set functional upsampling resolution (default is aseg->xsize/(USF)).
     * @param segmentation_file Use specified segmentation file instead of aseg.mgz.
     * @param wsurf Specify the white surface (default is 'white').
     * @param psurf Specify the pial surface (default is 'pial').
     * @param no_aseg Do not include aseg in processing (useful for testing).
     * @param stackfile Put cortex, subcortical GM, WM, CSF into a single multi-frame file.
     * @param gmfile Put cortex + subcortical GM into a single-frame file.
     * @param no_fill_csf Do not attempt to fill voxels surrounding segmentation with extracerebral CSF segmentation.
     * @param dilation For xCSF fill, dilate by specified number (default is 3). Use -1 to fill the entire volume.
     * @param out_seg Save segmentation (after adding xCSF voxels).
     * @param ttseg Save tissue type segmentation.
     * @param ttseg_ctab Save tissue type segmentation color table.
     * @param mgz_format Use MGZ format.
     * @param mgh_format Use MGH format.
     * @param nii_format Use NII format.
     * @param nii_gz_format Use NII.GZ format.
     * @param ttype_head Use default+head instead of default tissue type info for segmentation.
     * @param vg_thresh Threshold for 'ERROR: LTAconcat(): LTAs 0 and 1 do not match'.
     * @param debug Turn on debugging mode.
     * @param checkopts Do not run anything, just check options and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriComputeVolumeFractionsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_COMPUTE_VOLUME_FRACTIONS_METADATA);
    const params = mri_compute_volume_fractions_params(output_stem, registration_file, regheader, usf, resolution, resmm, segmentation_file, wsurf, psurf, no_aseg, stackfile, gmfile, no_fill_csf, dilation, out_seg, ttseg, ttseg_ctab, mgz_format, mgh_format, nii_format, nii_gz_format, ttype_head, vg_thresh, debug, checkopts)
    return mri_compute_volume_fractions_execute(params, execution);
}


export {
      MRI_COMPUTE_VOLUME_FRACTIONS_METADATA,
      MriComputeVolumeFractionsOutputs,
      MriComputeVolumeFractionsParameters,
      mri_compute_volume_fractions,
      mri_compute_volume_fractions_params,
};
