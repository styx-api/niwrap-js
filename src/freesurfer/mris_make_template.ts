// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_MAKE_TEMPLATE_METADATA: Metadata = {
    id: "f241b82eadd84acf1f6370c052eca75a53412d4e.boutiques",
    name: "mris_make_template",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisMakeTemplateParameters {
    "__STYXTYPE__": "mris_make_template";
    "hemi": string;
    "surface_name": string;
    "subjects": Array<string>;
    "output_name": string;
    "addframe_parameters"?: Array<string> | null | undefined;
    "vector": boolean;
    "norot": boolean;
    "rot": boolean;
    "annot": boolean;
    "overlay_parameters"?: Array<string> | null | undefined;
    "overlay_dir"?: string | null | undefined;
    "scale"?: number | null | undefined;
    "surf_dir"?: string | null | undefined;
    "smooth_iterations"?: number | null | undefined;
    "subjects_dir"?: string | null | undefined;
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
        "mris_make_template": mris_make_template_cargs,
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
 * Output object returned when calling `mris_make_template(...)`.
 *
 * @interface
 */
interface MrisMakeTemplateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_make_template_params(
    hemi: string,
    surface_name: string,
    subjects: Array<string>,
    output_name: string,
    addframe_parameters: Array<string> | null = null,
    vector: boolean = false,
    norot: boolean = false,
    rot: boolean = false,
    annot: boolean = false,
    overlay_parameters: Array<string> | null = null,
    overlay_dir: string | null = null,
    scale: number | null = null,
    surf_dir: string | null = null,
    smooth_iterations: number | null = null,
    subjects_dir: string | null = null,
): MrisMakeTemplateParameters {
    /**
     * Build parameters.
    
     * @param hemi Hemisphere (e.g., 'lh' or 'rh')
     * @param surface_name Surface name (e.g., 'white', 'pial')
     * @param subjects List of subjects to be averaged
     * @param output_name Output name for the template
     * @param addframe_parameters Add a frame with specific field and location in atlas
     * @param vector Print additional information for addframe
     * @param norot Not aligning hemispheres before averaging (default)
     * @param rot Rough rigid alignment of hemispheres before averaging
     * @param annot Zero medial wall
     * @param overlay_parameters Read overlay from file, specify number of averages
     * @param overlay_dir Use directory for overlay hemi
     * @param scale Scale value for transformation
     * @param surf_dir Use custom subdirectory instead of 'surf'
     * @param smooth_iterations Number of iterations to smooth curvature
     * @param subjects_dir Specify SUBJECTS_DIR
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_make_template" as const,
        "hemi": hemi,
        "surface_name": surface_name,
        "subjects": subjects,
        "output_name": output_name,
        "vector": vector,
        "norot": norot,
        "rot": rot,
        "annot": annot,
    };
    if (addframe_parameters !== null) {
        params["addframe_parameters"] = addframe_parameters;
    }
    if (overlay_parameters !== null) {
        params["overlay_parameters"] = overlay_parameters;
    }
    if (overlay_dir !== null) {
        params["overlay_dir"] = overlay_dir;
    }
    if (scale !== null) {
        params["scale"] = scale;
    }
    if (surf_dir !== null) {
        params["surf_dir"] = surf_dir;
    }
    if (smooth_iterations !== null) {
        params["smooth_iterations"] = smooth_iterations;
    }
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    return params;
}


function mris_make_template_cargs(
    params: MrisMakeTemplateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_make_template");
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["surface_name"] ?? null));
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["output_name"] ?? null));
    if ((params["addframe_parameters"] ?? null) !== null) {
        cargs.push(
            "-addframe",
            ...(params["addframe_parameters"] ?? null)
        );
    }
    if ((params["vector"] ?? null)) {
        cargs.push("-vector");
    }
    if ((params["norot"] ?? null)) {
        cargs.push("-norot");
    }
    if ((params["rot"] ?? null)) {
        cargs.push("-rot");
    }
    if ((params["annot"] ?? null)) {
        cargs.push("-annot");
    }
    if ((params["overlay_parameters"] ?? null) !== null) {
        cargs.push(
            "-overlay",
            ...(params["overlay_parameters"] ?? null)
        );
    }
    if ((params["overlay_dir"] ?? null) !== null) {
        cargs.push(
            "-overlay-dir",
            (params["overlay_dir"] ?? null)
        );
    }
    if ((params["scale"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["scale"] ?? null))
        );
    }
    if ((params["surf_dir"] ?? null) !== null) {
        cargs.push(
            "-surf_dir",
            (params["surf_dir"] ?? null)
        );
    }
    if ((params["smooth_iterations"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["smooth_iterations"] ?? null))
        );
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "-sdir",
            (params["subjects_dir"] ?? null)
        );
    }
    return cargs;
}


function mris_make_template_outputs(
    params: MrisMakeTemplateParameters,
    execution: Execution,
): MrisMakeTemplateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisMakeTemplateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_make_template_execute(
    params: MrisMakeTemplateParameters,
    execution: Execution,
): MrisMakeTemplateOutputs {
    /**
     * This program will add a template into an average surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisMakeTemplateOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_make_template_cargs(params, execution)
    const ret = mris_make_template_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_make_template(
    hemi: string,
    surface_name: string,
    subjects: Array<string>,
    output_name: string,
    addframe_parameters: Array<string> | null = null,
    vector: boolean = false,
    norot: boolean = false,
    rot: boolean = false,
    annot: boolean = false,
    overlay_parameters: Array<string> | null = null,
    overlay_dir: string | null = null,
    scale: number | null = null,
    surf_dir: string | null = null,
    smooth_iterations: number | null = null,
    subjects_dir: string | null = null,
    runner: Runner | null = null,
): MrisMakeTemplateOutputs {
    /**
     * This program will add a template into an average surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hemi Hemisphere (e.g., 'lh' or 'rh')
     * @param surface_name Surface name (e.g., 'white', 'pial')
     * @param subjects List of subjects to be averaged
     * @param output_name Output name for the template
     * @param addframe_parameters Add a frame with specific field and location in atlas
     * @param vector Print additional information for addframe
     * @param norot Not aligning hemispheres before averaging (default)
     * @param rot Rough rigid alignment of hemispheres before averaging
     * @param annot Zero medial wall
     * @param overlay_parameters Read overlay from file, specify number of averages
     * @param overlay_dir Use directory for overlay hemi
     * @param scale Scale value for transformation
     * @param surf_dir Use custom subdirectory instead of 'surf'
     * @param smooth_iterations Number of iterations to smooth curvature
     * @param subjects_dir Specify SUBJECTS_DIR
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisMakeTemplateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_MAKE_TEMPLATE_METADATA);
    const params = mris_make_template_params(hemi, surface_name, subjects, output_name, addframe_parameters, vector, norot, rot, annot, overlay_parameters, overlay_dir, scale, surf_dir, smooth_iterations, subjects_dir)
    return mris_make_template_execute(params, execution);
}


export {
      MRIS_MAKE_TEMPLATE_METADATA,
      MrisMakeTemplateOutputs,
      MrisMakeTemplateParameters,
      mris_make_template,
      mris_make_template_params,
};
