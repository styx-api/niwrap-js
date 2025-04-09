// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_CONGEAL_METADATA: Metadata = {
    id: "906f6d639b30bc267c7e7a88eb3482c7ae66c5a2.boutiques",
    name: "mris_congeal",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisCongealParameters {
    "__STYXTYPE__": "mris_congeal";
    "input_surface_name": string;
    "hemi": string;
    "subjects": Array<string>;
    "output_surface_name": string;
    "subjects_dir"?: string | null | undefined;
    "disable_rigid_alignment": boolean;
    "disable_sulc_alignment": boolean;
    "smoothwm_curv": boolean;
    "jacobian_output"?: string | null | undefined;
    "distance_term"?: number | null | undefined;
    "manual_label"?: Array<string> | null | undefined;
    "addframe"?: Array<string> | null | undefined;
    "overlay"?: Array<string> | null | undefined;
    "overlay_dir"?: string | null | undefined;
    "target_subject": boolean;
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
        "mris_congeal": mris_congeal_cargs,
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
        "mris_congeal": mris_congeal_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_congeal(...)`.
 *
 * @interface
 */
interface MrisCongealOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output surface
     */
    output_surface: OutputPathType;
}


function mris_congeal_params(
    input_surface_name: string,
    hemi: string,
    subjects: Array<string>,
    output_surface_name: string,
    subjects_dir: string | null = null,
    disable_rigid_alignment: boolean = false,
    disable_sulc_alignment: boolean = false,
    smoothwm_curv: boolean = false,
    jacobian_output: string | null = null,
    distance_term: number | null = null,
    manual_label: Array<string> | null = null,
    addframe: Array<string> | null = null,
    overlay: Array<string> | null = null,
    overlay_dir: string | null = null,
    target_subject: boolean = false,
): MrisCongealParameters {
    /**
     * Build parameters.
    
     * @param input_surface_name Input surface name
     * @param hemi Hemisphere (hemi)
     * @param subjects List of subjects
     * @param output_surface_name Output surface name
     * @param subjects_dir Subjects directory
     * @param disable_rigid_alignment Disable initial rigid alignment
     * @param disable_sulc_alignment Disable initial sulc alignment
     * @param smoothwm_curv Use smoothwm curvature for final alignment
     * @param jacobian_output Write-out jacobian overlay data to file
     * @param distance_term Specify distance term
     * @param manual_label Specify a manual label to align with atlas label
     * @param addframe Add frame with specified parameters
     * @param overlay Specify overlay surface values and number of averages
     * @param overlay_dir Specify overlay directory
     * @param target_subject Target specifies a subject's surface, not a template file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_congeal" as const,
        "input_surface_name": input_surface_name,
        "hemi": hemi,
        "subjects": subjects,
        "output_surface_name": output_surface_name,
        "disable_rigid_alignment": disable_rigid_alignment,
        "disable_sulc_alignment": disable_sulc_alignment,
        "smoothwm_curv": smoothwm_curv,
        "target_subject": target_subject,
    };
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (jacobian_output !== null) {
        params["jacobian_output"] = jacobian_output;
    }
    if (distance_term !== null) {
        params["distance_term"] = distance_term;
    }
    if (manual_label !== null) {
        params["manual_label"] = manual_label;
    }
    if (addframe !== null) {
        params["addframe"] = addframe;
    }
    if (overlay !== null) {
        params["overlay"] = overlay;
    }
    if (overlay_dir !== null) {
        params["overlay_dir"] = overlay_dir;
    }
    return params;
}


function mris_congeal_cargs(
    params: MrisCongealParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_congeal");
    cargs.push((params["input_surface_name"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["output_surface_name"] ?? null));
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "-SDIR",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["disable_rigid_alignment"] ?? null)) {
        cargs.push("-norot");
    }
    if ((params["disable_sulc_alignment"] ?? null)) {
        cargs.push("-nosulc");
    }
    if ((params["smoothwm_curv"] ?? null)) {
        cargs.push("-curv");
    }
    if ((params["jacobian_output"] ?? null) !== null) {
        cargs.push(
            "-jacobian",
            (params["jacobian_output"] ?? null)
        );
    }
    if ((params["distance_term"] ?? null) !== null) {
        cargs.push(
            "-dist",
            String((params["distance_term"] ?? null))
        );
    }
    if ((params["manual_label"] ?? null) !== null) {
        cargs.push(
            "-l",
            ...(params["manual_label"] ?? null)
        );
    }
    if ((params["addframe"] ?? null) !== null) {
        cargs.push(
            "-addframe",
            ...(params["addframe"] ?? null)
        );
    }
    if ((params["overlay"] ?? null) !== null) {
        cargs.push(
            "-overlay",
            ...(params["overlay"] ?? null)
        );
    }
    if ((params["overlay_dir"] ?? null) !== null) {
        cargs.push(
            "-overlay-dir",
            (params["overlay_dir"] ?? null)
        );
    }
    if ((params["target_subject"] ?? null)) {
        cargs.push("-1");
    }
    return cargs;
}


function mris_congeal_outputs(
    params: MrisCongealParameters,
    execution: Execution,
): MrisCongealOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisCongealOutputs = {
        root: execution.outputFile("."),
        output_surface: execution.outputFile([(params["output_surface_name"] ?? null)].join('')),
    };
    return ret;
}


function mris_congeal_execute(
    params: MrisCongealParameters,
    execution: Execution,
): MrisCongealOutputs {
    /**
     * Program that registers a set of input surfaces together and generates an atlas.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisCongealOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_congeal_cargs(params, execution)
    const ret = mris_congeal_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_congeal(
    input_surface_name: string,
    hemi: string,
    subjects: Array<string>,
    output_surface_name: string,
    subjects_dir: string | null = null,
    disable_rigid_alignment: boolean = false,
    disable_sulc_alignment: boolean = false,
    smoothwm_curv: boolean = false,
    jacobian_output: string | null = null,
    distance_term: number | null = null,
    manual_label: Array<string> | null = null,
    addframe: Array<string> | null = null,
    overlay: Array<string> | null = null,
    overlay_dir: string | null = null,
    target_subject: boolean = false,
    runner: Runner | null = null,
): MrisCongealOutputs {
    /**
     * Program that registers a set of input surfaces together and generates an atlas.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface_name Input surface name
     * @param hemi Hemisphere (hemi)
     * @param subjects List of subjects
     * @param output_surface_name Output surface name
     * @param subjects_dir Subjects directory
     * @param disable_rigid_alignment Disable initial rigid alignment
     * @param disable_sulc_alignment Disable initial sulc alignment
     * @param smoothwm_curv Use smoothwm curvature for final alignment
     * @param jacobian_output Write-out jacobian overlay data to file
     * @param distance_term Specify distance term
     * @param manual_label Specify a manual label to align with atlas label
     * @param addframe Add frame with specified parameters
     * @param overlay Specify overlay surface values and number of averages
     * @param overlay_dir Specify overlay directory
     * @param target_subject Target specifies a subject's surface, not a template file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisCongealOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_CONGEAL_METADATA);
    const params = mris_congeal_params(input_surface_name, hemi, subjects, output_surface_name, subjects_dir, disable_rigid_alignment, disable_sulc_alignment, smoothwm_curv, jacobian_output, distance_term, manual_label, addframe, overlay, overlay_dir, target_subject)
    return mris_congeal_execute(params, execution);
}


export {
      MRIS_CONGEAL_METADATA,
      MrisCongealOutputs,
      MrisCongealParameters,
      mris_congeal,
      mris_congeal_params,
};
