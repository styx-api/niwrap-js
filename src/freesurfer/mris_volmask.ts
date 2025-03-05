// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_VOLMASK_METADATA: Metadata = {
    id: "ff800b0130320a3ca061f0dce6a9fb1136b538ad.boutiques",
    name: "mris_volmask",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisVolmaskParameters {
    "__STYXTYPE__": "mris_volmask";
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
    "io": string;
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
        "mris_volmask": mris_volmask_cargs,
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
 * Output object returned when calling `mris_volmask(...)`.
 *
 * @interface
 */
interface MrisVolmaskOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_volmask_params(
    io: string,
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
): MrisVolmaskParameters {
    /**
     * Build parameters.
    
     * @param io Positional argument that represents input/output settings.
     * @param cap_distance Maximum distance up to which the signed distance function computation is accurate.
     * @param label_background Override default value for background label value (0).
     * @param label_left_white Override default value for left white matter label (20).
     * @param label_left_ribbon Override default value for left ribbon label (10).
     * @param label_right_white Override default value for right white matter label (120).
     * @param label_right_ribbon Override default value for right ribbon label (110).
     * @param surf_white Surface root name (e.g. <subject>/surf/$hemi.<NAME> - default value is white).
     * @param surf_pial Surface root name (e.g. <subject>/surf/$hemi.<NAME> - default value is pial).
     * @param aseg_name Specify a different name for the aseg input file (default is aseg).
     * @param out_root Output root name (default is ribbon). Output files would be, for example, mri/ribbon.mgz.
     * @param subjects_dir Specify SUBJECTS_DIR, default is read from environment.
     * @param save_distance Save the signed distance function as ?h.dwhite.mgz and ?h.dpial.mgz.
     * @param lh_only Only process left hemisphere.
     * @param rh_only Only process right hemisphere.
     * @param parallel Run hemispheres in parallel and combine the result.
     * @param edit_aseg Edit the aseg using the ribbons and save to aseg.ribbon.mgz.
     * @param save_ribbon Save just the ribbon for the hemispheres - in the format ?h.ribbon.mgz.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_volmask" as const,
        "save_distance": save_distance,
        "lh_only": lh_only,
        "rh_only": rh_only,
        "parallel": parallel,
        "edit_aseg": edit_aseg,
        "save_ribbon": save_ribbon,
        "io": io,
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


function mris_volmask_cargs(
    params: MrisVolmaskParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_volmask");
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
    cargs.push((params["io"] ?? null));
    return cargs;
}


function mris_volmask_outputs(
    params: MrisVolmaskParameters,
    execution: Execution,
): MrisVolmaskOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisVolmaskOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_volmask_execute(
    params: MrisVolmaskParameters,
    execution: Execution,
): MrisVolmaskOutputs {
    /**
     * Computes a volume mask, at the same resolution as the <subject>/mri/brain.mgz. The volume mask contains 4 values: LH_WM (default 10), LH_GM (default 100), RH_WM (default 20), RH_GM (default 200).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisVolmaskOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_volmask_cargs(params, execution)
    const ret = mris_volmask_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_volmask(
    io: string,
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
): MrisVolmaskOutputs {
    /**
     * Computes a volume mask, at the same resolution as the <subject>/mri/brain.mgz. The volume mask contains 4 values: LH_WM (default 10), LH_GM (default 100), RH_WM (default 20), RH_GM (default 200).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param io Positional argument that represents input/output settings.
     * @param cap_distance Maximum distance up to which the signed distance function computation is accurate.
     * @param label_background Override default value for background label value (0).
     * @param label_left_white Override default value for left white matter label (20).
     * @param label_left_ribbon Override default value for left ribbon label (10).
     * @param label_right_white Override default value for right white matter label (120).
     * @param label_right_ribbon Override default value for right ribbon label (110).
     * @param surf_white Surface root name (e.g. <subject>/surf/$hemi.<NAME> - default value is white).
     * @param surf_pial Surface root name (e.g. <subject>/surf/$hemi.<NAME> - default value is pial).
     * @param aseg_name Specify a different name for the aseg input file (default is aseg).
     * @param out_root Output root name (default is ribbon). Output files would be, for example, mri/ribbon.mgz.
     * @param subjects_dir Specify SUBJECTS_DIR, default is read from environment.
     * @param save_distance Save the signed distance function as ?h.dwhite.mgz and ?h.dpial.mgz.
     * @param lh_only Only process left hemisphere.
     * @param rh_only Only process right hemisphere.
     * @param parallel Run hemispheres in parallel and combine the result.
     * @param edit_aseg Edit the aseg using the ribbons and save to aseg.ribbon.mgz.
     * @param save_ribbon Save just the ribbon for the hemispheres - in the format ?h.ribbon.mgz.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisVolmaskOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_VOLMASK_METADATA);
    const params = mris_volmask_params(io, cap_distance, label_background, label_left_white, label_left_ribbon, label_right_white, label_right_ribbon, surf_white, surf_pial, aseg_name, out_root, subjects_dir, save_distance, lh_only, rh_only, parallel, edit_aseg, save_ribbon)
    return mris_volmask_execute(params, execution);
}


export {
      MRIS_VOLMASK_METADATA,
      MrisVolmaskOutputs,
      MrisVolmaskParameters,
      mris_volmask,
      mris_volmask_params,
};
