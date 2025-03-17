// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_VOLMASK_VTK_METADATA: Metadata = {
    id: "26e246fc04ff45f83eec1e536a78198e40089ef9.boutiques",
    name: "mris_volmask_vtk",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisVolmaskVtkParameters {
    "__STYXTYPE__": "mris_volmask_vtk";
    "cap_distance"?: number | null | undefined;
    "label_background"?: number | null | undefined;
    "label_left_white"?: number | null | undefined;
    "label_left_ribbon"?: number | null | undefined;
    "label_right_white"?: number | null | undefined;
    "label_right_ribbon"?: number | null | undefined;
    "surf_white"?: string | null | undefined;
    "surf_pial"?: string | null | undefined;
    "aseg_name"?: string | null | undefined;
    "out_root"?: string | null | undefined;
    "subjects_dir"?: string | null | undefined;
    "save_distance": boolean;
    "lh_only": boolean;
    "rh_only": boolean;
    "parallel": boolean;
    "edit_aseg": boolean;
    "save_ribbon": boolean;
    "io_param": string;
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
        "mris_volmask_vtk": mris_volmask_vtk_cargs,
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
        "mris_volmask_vtk": mris_volmask_vtk_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_volmask_vtk(...)`.
 *
 * @interface
 */
interface MrisVolmaskVtkOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volume mask file.
     */
    output_volume_mask: OutputPathType | null;
    /**
     * Left hemisphere ribbon output file.
     */
    left_ribbon_output: OutputPathType | null;
    /**
     * Right hemisphere ribbon output file.
     */
    right_ribbon_output: OutputPathType | null;
    /**
     * Edited aseg output using ribbons.
     */
    edited_aseg_output: OutputPathType;
    /**
     * Signed distance output for the white matter.
     */
    dwhite_output: OutputPathType;
    /**
     * Signed distance output for the pial surface.
     */
    dpial_output: OutputPathType;
}


function mris_volmask_vtk_params(
    io_param: string,
    cap_distance: number | null = null,
    label_background: number | null = null,
    label_left_white: number | null = null,
    label_left_ribbon: number | null = null,
    label_right_white: number | null = null,
    label_right_ribbon: number | null = null,
    surf_white: string | null = null,
    surf_pial: string | null = null,
    aseg_name: string | null = null,
    out_root: string | null = null,
    subjects_dir: string | null = null,
    save_distance: boolean = false,
    lh_only: boolean = false,
    rh_only: boolean = false,
    parallel: boolean = false,
    edit_aseg: boolean = false,
    save_ribbon: boolean = false,
): MrisVolmaskVtkParameters {
    /**
     * Build parameters.
    
     * @param io_param Input-Output parameter as positional argument
     * @param cap_distance Maximum distance up to which the signed distance function computation is accurate.
     * @param label_background Override the default background label value (0).
     * @param label_left_white Override the default left white matter label (20).
     * @param label_left_ribbon Override the default left ribbon label (10).
     * @param label_right_white Override the default right white matter label (120).
     * @param label_right_ribbon Override the default right ribbon label (110).
     * @param surf_white Surface root name for white matter surfaces (default: white).
     * @param surf_pial Surface root name for pial surfaces (default: pial).
     * @param aseg_name Specify a different name for the aseg input file (default: aseg).
     * @param out_root Output root name (default: ribbon) for generated output files.
     * @param subjects_dir Specify the SUBJECTS_DIR, default is read from environment.
     * @param save_distance Option to save the signed distance function.
     * @param lh_only Only process left hemisphere.
     * @param rh_only Only process right hemisphere.
     * @param parallel Run hemispheres in parallel and combine the result.
     * @param edit_aseg Edit the aseg using the ribbons and save it.
     * @param save_ribbon Save only the ribbon for the hemispheres.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_volmask_vtk" as const,
        "save_distance": save_distance,
        "lh_only": lh_only,
        "rh_only": rh_only,
        "parallel": parallel,
        "edit_aseg": edit_aseg,
        "save_ribbon": save_ribbon,
        "io_param": io_param,
    };
    if (cap_distance !== null) {
        params["cap_distance"] = cap_distance;
    }
    if (label_background !== null) {
        params["label_background"] = label_background;
    }
    if (label_left_white !== null) {
        params["label_left_white"] = label_left_white;
    }
    if (label_left_ribbon !== null) {
        params["label_left_ribbon"] = label_left_ribbon;
    }
    if (label_right_white !== null) {
        params["label_right_white"] = label_right_white;
    }
    if (label_right_ribbon !== null) {
        params["label_right_ribbon"] = label_right_ribbon;
    }
    if (surf_white !== null) {
        params["surf_white"] = surf_white;
    }
    if (surf_pial !== null) {
        params["surf_pial"] = surf_pial;
    }
    if (aseg_name !== null) {
        params["aseg_name"] = aseg_name;
    }
    if (out_root !== null) {
        params["out_root"] = out_root;
    }
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    return params;
}


function mris_volmask_vtk_cargs(
    params: MrisVolmaskVtkParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_volmask_vtk");
    if ((params["cap_distance"] ?? null) !== null) {
        cargs.push(
            "--cap_distance",
            String((params["cap_distance"] ?? null))
        );
    }
    if ((params["label_background"] ?? null) !== null) {
        cargs.push(
            "--label_background",
            String((params["label_background"] ?? null))
        );
    }
    if ((params["label_left_white"] ?? null) !== null) {
        cargs.push(
            "--label_left_white",
            String((params["label_left_white"] ?? null))
        );
    }
    if ((params["label_left_ribbon"] ?? null) !== null) {
        cargs.push(
            "--label_left_ribbon",
            String((params["label_left_ribbon"] ?? null))
        );
    }
    if ((params["label_right_white"] ?? null) !== null) {
        cargs.push(
            "--label_right_white",
            String((params["label_right_white"] ?? null))
        );
    }
    if ((params["label_right_ribbon"] ?? null) !== null) {
        cargs.push(
            "--label_right_ribbon",
            String((params["label_right_ribbon"] ?? null))
        );
    }
    if ((params["surf_white"] ?? null) !== null) {
        cargs.push(
            "--surf_white",
            (params["surf_white"] ?? null)
        );
    }
    if ((params["surf_pial"] ?? null) !== null) {
        cargs.push(
            "--surf_pial",
            (params["surf_pial"] ?? null)
        );
    }
    if ((params["aseg_name"] ?? null) !== null) {
        cargs.push(
            "--aseg_name",
            (params["aseg_name"] ?? null)
        );
    }
    if ((params["out_root"] ?? null) !== null) {
        cargs.push(
            "--out_root",
            (params["out_root"] ?? null)
        );
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "--sd",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["save_distance"] ?? null)) {
        cargs.push("--save_distance");
    }
    if ((params["lh_only"] ?? null)) {
        cargs.push("--lh-only");
    }
    if ((params["rh_only"] ?? null)) {
        cargs.push("--rh-only");
    }
    if ((params["parallel"] ?? null)) {
        cargs.push("--parallel");
    }
    if ((params["edit_aseg"] ?? null)) {
        cargs.push("--edit_aseg");
    }
    if ((params["save_ribbon"] ?? null)) {
        cargs.push("--save_ribbon");
    }
    cargs.push((params["io_param"] ?? null));
    return cargs;
}


function mris_volmask_vtk_outputs(
    params: MrisVolmaskVtkParameters,
    execution: Execution,
): MrisVolmaskVtkOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisVolmaskVtkOutputs = {
        root: execution.outputFile("."),
        output_volume_mask: ((params["out_root"] ?? null) !== null) ? execution.outputFile(["mri/", (params["out_root"] ?? null), ".mgz"].join('')) : null,
        left_ribbon_output: ((params["out_root"] ?? null) !== null) ? execution.outputFile(["mri/lh.", (params["out_root"] ?? null), ".mgz"].join('')) : null,
        right_ribbon_output: ((params["out_root"] ?? null) !== null) ? execution.outputFile(["mri/rh.", (params["out_root"] ?? null), ".mgz"].join('')) : null,
        edited_aseg_output: execution.outputFile(["mri/aseg.ribbon.mgz"].join('')),
        dwhite_output: execution.outputFile(["mri/?h.dwhite.mgz"].join('')),
        dpial_output: execution.outputFile(["mri/?h.dpial.mgz"].join('')),
    };
    return ret;
}


function mris_volmask_vtk_execute(
    params: MrisVolmaskVtkParameters,
    execution: Execution,
): MrisVolmaskVtkOutputs {
    /**
     * Computes a volume mask at the resolution of the brain.mgz file, containing labels for various brain structures using surface files.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisVolmaskVtkOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_volmask_vtk_cargs(params, execution)
    const ret = mris_volmask_vtk_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_volmask_vtk(
    io_param: string,
    cap_distance: number | null = null,
    label_background: number | null = null,
    label_left_white: number | null = null,
    label_left_ribbon: number | null = null,
    label_right_white: number | null = null,
    label_right_ribbon: number | null = null,
    surf_white: string | null = null,
    surf_pial: string | null = null,
    aseg_name: string | null = null,
    out_root: string | null = null,
    subjects_dir: string | null = null,
    save_distance: boolean = false,
    lh_only: boolean = false,
    rh_only: boolean = false,
    parallel: boolean = false,
    edit_aseg: boolean = false,
    save_ribbon: boolean = false,
    runner: Runner | null = null,
): MrisVolmaskVtkOutputs {
    /**
     * Computes a volume mask at the resolution of the brain.mgz file, containing labels for various brain structures using surface files.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param io_param Input-Output parameter as positional argument
     * @param cap_distance Maximum distance up to which the signed distance function computation is accurate.
     * @param label_background Override the default background label value (0).
     * @param label_left_white Override the default left white matter label (20).
     * @param label_left_ribbon Override the default left ribbon label (10).
     * @param label_right_white Override the default right white matter label (120).
     * @param label_right_ribbon Override the default right ribbon label (110).
     * @param surf_white Surface root name for white matter surfaces (default: white).
     * @param surf_pial Surface root name for pial surfaces (default: pial).
     * @param aseg_name Specify a different name for the aseg input file (default: aseg).
     * @param out_root Output root name (default: ribbon) for generated output files.
     * @param subjects_dir Specify the SUBJECTS_DIR, default is read from environment.
     * @param save_distance Option to save the signed distance function.
     * @param lh_only Only process left hemisphere.
     * @param rh_only Only process right hemisphere.
     * @param parallel Run hemispheres in parallel and combine the result.
     * @param edit_aseg Edit the aseg using the ribbons and save it.
     * @param save_ribbon Save only the ribbon for the hemispheres.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisVolmaskVtkOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_VOLMASK_VTK_METADATA);
    const params = mris_volmask_vtk_params(io_param, cap_distance, label_background, label_left_white, label_left_ribbon, label_right_white, label_right_ribbon, surf_white, surf_pial, aseg_name, out_root, subjects_dir, save_distance, lh_only, rh_only, parallel, edit_aseg, save_ribbon)
    return mris_volmask_vtk_execute(params, execution);
}


export {
      MRIS_VOLMASK_VTK_METADATA,
      MrisVolmaskVtkOutputs,
      MrisVolmaskVtkParameters,
      mris_volmask_vtk,
      mris_volmask_vtk_params,
};
