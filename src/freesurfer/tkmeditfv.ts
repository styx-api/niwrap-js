// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TKMEDITFV_METADATA: Metadata = {
    id: "cbd5f4cf7541f87238cd68202cdafa6b3a7ee7d0.boutiques",
    name: "tkmeditfv",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TkmeditfvParameters {
    "__STYXTYPE__": "tkmeditfv";
    "subject"?: string | null | undefined;
    "mainvol": InputPathType;
    "aux_volume"?: InputPathType | null | undefined;
    "seg_volume"?: InputPathType | null | undefined;
    "overlay"?: InputPathType | null | undefined;
    "timecourse"?: InputPathType | null | undefined;
    "overlay_registration"?: InputPathType | null | undefined;
    "surface"?: Array<string> | null | undefined;
    "extra_volumes"?: Array<InputPathType> | null | undefined;
    "crs_location"?: Array<number> | null | undefined;
    "zoom_level"?: number | null | undefined;
    "additional_segments"?: Array<InputPathType> | null | undefined;
    "load_white": boolean;
    "load_pial": boolean;
    "load_orig": boolean;
    "load_orig_nofix": boolean;
    "load_smoothwm_nofix": boolean;
    "load_white_preaparc": boolean;
    "load_inflated": boolean;
    "annot"?: string | null | undefined;
    "load_aparc": boolean;
    "surfext"?: string | null | undefined;
    "seg_outline": boolean;
    "intensity_minmax"?: Array<number> | null | undefined;
    "load_defects": boolean;
    "load_defect_pointset": boolean;
    "trilin_interpolation": boolean;
    "neurological_orientation": boolean;
    "rotate_around_cursor": boolean;
    "vgl_display": boolean;
    "use_tkmedit": boolean;
    "load_aparc_aseg": boolean;
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
        "tkmeditfv": tkmeditfv_cargs,
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
 * Output object returned when calling `tkmeditfv(...)`.
 *
 * @interface
 */
interface TkmeditfvOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function tkmeditfv_params(
    mainvol: InputPathType,
    subject: string | null = null,
    aux_volume: InputPathType | null = null,
    seg_volume: InputPathType | null = null,
    overlay: InputPathType | null = null,
    timecourse: InputPathType | null = null,
    overlay_registration: InputPathType | null = null,
    surface: Array<string> | null = null,
    extra_volumes: Array<InputPathType> | null = null,
    crs_location: Array<number> | null = null,
    zoom_level: number | null = null,
    additional_segments: Array<InputPathType> | null = null,
    load_white: boolean = false,
    load_pial: boolean = false,
    load_orig: boolean = false,
    load_orig_nofix: boolean = false,
    load_smoothwm_nofix: boolean = false,
    load_white_preaparc: boolean = false,
    load_inflated: boolean = false,
    annot: string | null = null,
    load_aparc: boolean = false,
    surfext: string | null = null,
    seg_outline: boolean = false,
    intensity_minmax: Array<number> | null = null,
    load_defects: boolean = false,
    load_defect_pointset: boolean = false,
    trilin_interpolation: boolean = false,
    neurological_orientation: boolean = false,
    rotate_around_cursor: boolean = false,
    vgl_display: boolean = false,
    use_tkmedit: boolean = false,
    load_aparc_aseg: boolean = false,
): TkmeditfvParameters {
    /**
     * Build parameters.
    
     * @param mainvol Main volume file path
     * @param subject Subject's name
     * @param aux_volume Auxiliary volume file path
     * @param seg_volume Segmentation volume file path
     * @param overlay Overlay volume file path
     * @param timecourse Timecourse for overlay
     * @param overlay_registration Overlay timecourse registration file
     * @param surface Load surface with optional color
     * @param extra_volumes Load extra volume(s)
     * @param crs_location Place cursor at given (col, row, slice) location
     * @param zoom_level Set zoom level
     * @param additional_segments Add additional segmentations
     * @param load_white Load lh and rh.white surfaces
     * @param load_pial Load lh and rh.pial surfaces
     * @param load_orig Load lh and rh.orig surfaces
     * @param load_orig_nofix Load lh and rh.orig.nofix surfaces
     * @param load_smoothwm_nofix Load lh and rh.smoothwm.nofix surfaces
     * @param load_white_preaparc Load lh and rh.white.preaparc surfaces
     * @param load_inflated Load lh and rh.inflated surfaces
     * @param annot Load annotation file
     * @param load_aparc Load aparc annotation
     * @param surfext Add extension to the name of the surface
     * @param seg_outline Enable segmentation outline mode
     * @param intensity_minmax Set intensity min and max on first volume
     * @param load_defects Load info needed to evaluate defects
     * @param load_defect_pointset Load defect pointset
     * @param trilin_interpolation Use trilinear interpolation for volume overlays
     * @param neurological_orientation Use neurological orientation instead of radiological
     * @param rotate_around_cursor Rotate around cursor in 3D view
     * @param vgl_display Set VGL_DISPLAY and run with vglrun
     * @param use_tkmedit Use tkmedit instead of freeview
     * @param load_aparc_aseg Load aparc+aseg
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tkmeditfv" as const,
        "mainvol": mainvol,
        "load_white": load_white,
        "load_pial": load_pial,
        "load_orig": load_orig,
        "load_orig_nofix": load_orig_nofix,
        "load_smoothwm_nofix": load_smoothwm_nofix,
        "load_white_preaparc": load_white_preaparc,
        "load_inflated": load_inflated,
        "load_aparc": load_aparc,
        "seg_outline": seg_outline,
        "load_defects": load_defects,
        "load_defect_pointset": load_defect_pointset,
        "trilin_interpolation": trilin_interpolation,
        "neurological_orientation": neurological_orientation,
        "rotate_around_cursor": rotate_around_cursor,
        "vgl_display": vgl_display,
        "use_tkmedit": use_tkmedit,
        "load_aparc_aseg": load_aparc_aseg,
    };
    if (subject !== null) {
        params["subject"] = subject;
    }
    if (aux_volume !== null) {
        params["aux_volume"] = aux_volume;
    }
    if (seg_volume !== null) {
        params["seg_volume"] = seg_volume;
    }
    if (overlay !== null) {
        params["overlay"] = overlay;
    }
    if (timecourse !== null) {
        params["timecourse"] = timecourse;
    }
    if (overlay_registration !== null) {
        params["overlay_registration"] = overlay_registration;
    }
    if (surface !== null) {
        params["surface"] = surface;
    }
    if (extra_volumes !== null) {
        params["extra_volumes"] = extra_volumes;
    }
    if (crs_location !== null) {
        params["crs_location"] = crs_location;
    }
    if (zoom_level !== null) {
        params["zoom_level"] = zoom_level;
    }
    if (additional_segments !== null) {
        params["additional_segments"] = additional_segments;
    }
    if (annot !== null) {
        params["annot"] = annot;
    }
    if (surfext !== null) {
        params["surfext"] = surfext;
    }
    if (intensity_minmax !== null) {
        params["intensity_minmax"] = intensity_minmax;
    }
    return params;
}


function tkmeditfv_cargs(
    params: TkmeditfvParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tkmeditfv");
    if ((params["subject"] ?? null) !== null) {
        cargs.push((params["subject"] ?? null));
    }
    cargs.push(execution.inputFile((params["mainvol"] ?? null)));
    if ((params["aux_volume"] ?? null) !== null) {
        cargs.push(
            "-aux",
            execution.inputFile((params["aux_volume"] ?? null))
        );
    }
    if ((params["seg_volume"] ?? null) !== null) {
        cargs.push(
            "-seg",
            execution.inputFile((params["seg_volume"] ?? null))
        );
    }
    if ((params["overlay"] ?? null) !== null) {
        cargs.push(
            "-ov",
            execution.inputFile((params["overlay"] ?? null))
        );
    }
    if ((params["timecourse"] ?? null) !== null) {
        cargs.push(
            "-t",
            execution.inputFile((params["timecourse"] ?? null))
        );
    }
    if ((params["overlay_registration"] ?? null) !== null) {
        cargs.push(
            "-reg",
            execution.inputFile((params["overlay_registration"] ?? null))
        );
    }
    if ((params["surface"] ?? null) !== null) {
        cargs.push(
            "-surf",
            ...(params["surface"] ?? null)
        );
    }
    if ((params["extra_volumes"] ?? null) !== null) {
        cargs.push(
            "-vol",
            ...(params["extra_volumes"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["crs_location"] ?? null) !== null) {
        cargs.push(
            "-crs",
            ...(params["crs_location"] ?? null).map(String)
        );
    }
    if ((params["zoom_level"] ?? null) !== null) {
        cargs.push(
            "-zoom",
            String((params["zoom_level"] ?? null))
        );
    }
    if ((params["additional_segments"] ?? null) !== null) {
        cargs.push(
            "-seg2",
            ...(params["additional_segments"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["load_white"] ?? null)) {
        cargs.push("-white");
    }
    if ((params["load_pial"] ?? null)) {
        cargs.push("-pial");
    }
    if ((params["load_orig"] ?? null)) {
        cargs.push("-orig");
    }
    if ((params["load_orig_nofix"] ?? null)) {
        cargs.push("-orig.nofix");
    }
    if ((params["load_smoothwm_nofix"] ?? null)) {
        cargs.push("-smoothwm.nofix");
    }
    if ((params["load_white_preaparc"] ?? null)) {
        cargs.push("-white.preaparc");
    }
    if ((params["load_inflated"] ?? null)) {
        cargs.push("-inflated");
    }
    if ((params["annot"] ?? null) !== null) {
        cargs.push(
            "-annot",
            (params["annot"] ?? null)
        );
    }
    if ((params["load_aparc"] ?? null)) {
        cargs.push("-aparc");
    }
    if ((params["surfext"] ?? null) !== null) {
        cargs.push(
            "-surfext",
            (params["surfext"] ?? null)
        );
    }
    if ((params["seg_outline"] ?? null)) {
        cargs.push("-seg-outline");
    }
    if ((params["intensity_minmax"] ?? null) !== null) {
        cargs.push(
            "-main-minmax",
            ...(params["intensity_minmax"] ?? null).map(String)
        );
    }
    if ((params["load_defects"] ?? null)) {
        cargs.push("-defects");
    }
    if ((params["load_defect_pointset"] ?? null)) {
        cargs.push("-defectps");
    }
    if ((params["trilin_interpolation"] ?? null)) {
        cargs.push("-trilin");
    }
    if ((params["neurological_orientation"] ?? null)) {
        cargs.push("-neuro");
    }
    if ((params["rotate_around_cursor"] ?? null)) {
        cargs.push("-rotate-around-cursor");
    }
    if ((params["vgl_display"] ?? null)) {
        cargs.push("-vgl");
    }
    if ((params["use_tkmedit"] ?? null)) {
        cargs.push("-tkmedit");
    }
    if ((params["load_aparc_aseg"] ?? null)) {
        cargs.push("-aparc+aseg");
    }
    return cargs;
}


function tkmeditfv_outputs(
    params: TkmeditfvParameters,
    execution: Execution,
): TkmeditfvOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TkmeditfvOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function tkmeditfv_execute(
    params: TkmeditfvParameters,
    execution: Execution,
): TkmeditfvOutputs {
    /**
     * A wrapper script to run Freeview with arguments similar to tkmedit, providing both functionalities.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TkmeditfvOutputs`).
     */
    params = execution.params(params)
    const cargs = tkmeditfv_cargs(params, execution)
    const ret = tkmeditfv_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tkmeditfv(
    mainvol: InputPathType,
    subject: string | null = null,
    aux_volume: InputPathType | null = null,
    seg_volume: InputPathType | null = null,
    overlay: InputPathType | null = null,
    timecourse: InputPathType | null = null,
    overlay_registration: InputPathType | null = null,
    surface: Array<string> | null = null,
    extra_volumes: Array<InputPathType> | null = null,
    crs_location: Array<number> | null = null,
    zoom_level: number | null = null,
    additional_segments: Array<InputPathType> | null = null,
    load_white: boolean = false,
    load_pial: boolean = false,
    load_orig: boolean = false,
    load_orig_nofix: boolean = false,
    load_smoothwm_nofix: boolean = false,
    load_white_preaparc: boolean = false,
    load_inflated: boolean = false,
    annot: string | null = null,
    load_aparc: boolean = false,
    surfext: string | null = null,
    seg_outline: boolean = false,
    intensity_minmax: Array<number> | null = null,
    load_defects: boolean = false,
    load_defect_pointset: boolean = false,
    trilin_interpolation: boolean = false,
    neurological_orientation: boolean = false,
    rotate_around_cursor: boolean = false,
    vgl_display: boolean = false,
    use_tkmedit: boolean = false,
    load_aparc_aseg: boolean = false,
    runner: Runner | null = null,
): TkmeditfvOutputs {
    /**
     * A wrapper script to run Freeview with arguments similar to tkmedit, providing both functionalities.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param mainvol Main volume file path
     * @param subject Subject's name
     * @param aux_volume Auxiliary volume file path
     * @param seg_volume Segmentation volume file path
     * @param overlay Overlay volume file path
     * @param timecourse Timecourse for overlay
     * @param overlay_registration Overlay timecourse registration file
     * @param surface Load surface with optional color
     * @param extra_volumes Load extra volume(s)
     * @param crs_location Place cursor at given (col, row, slice) location
     * @param zoom_level Set zoom level
     * @param additional_segments Add additional segmentations
     * @param load_white Load lh and rh.white surfaces
     * @param load_pial Load lh and rh.pial surfaces
     * @param load_orig Load lh and rh.orig surfaces
     * @param load_orig_nofix Load lh and rh.orig.nofix surfaces
     * @param load_smoothwm_nofix Load lh and rh.smoothwm.nofix surfaces
     * @param load_white_preaparc Load lh and rh.white.preaparc surfaces
     * @param load_inflated Load lh and rh.inflated surfaces
     * @param annot Load annotation file
     * @param load_aparc Load aparc annotation
     * @param surfext Add extension to the name of the surface
     * @param seg_outline Enable segmentation outline mode
     * @param intensity_minmax Set intensity min and max on first volume
     * @param load_defects Load info needed to evaluate defects
     * @param load_defect_pointset Load defect pointset
     * @param trilin_interpolation Use trilinear interpolation for volume overlays
     * @param neurological_orientation Use neurological orientation instead of radiological
     * @param rotate_around_cursor Rotate around cursor in 3D view
     * @param vgl_display Set VGL_DISPLAY and run with vglrun
     * @param use_tkmedit Use tkmedit instead of freeview
     * @param load_aparc_aseg Load aparc+aseg
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TkmeditfvOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TKMEDITFV_METADATA);
    const params = tkmeditfv_params(mainvol, subject, aux_volume, seg_volume, overlay, timecourse, overlay_registration, surface, extra_volumes, crs_location, zoom_level, additional_segments, load_white, load_pial, load_orig, load_orig_nofix, load_smoothwm_nofix, load_white_preaparc, load_inflated, annot, load_aparc, surfext, seg_outline, intensity_minmax, load_defects, load_defect_pointset, trilin_interpolation, neurological_orientation, rotate_around_cursor, vgl_display, use_tkmedit, load_aparc_aseg)
    return tkmeditfv_execute(params, execution);
}


export {
      TKMEDITFV_METADATA,
      TkmeditfvOutputs,
      TkmeditfvParameters,
      tkmeditfv,
      tkmeditfv_params,
};
