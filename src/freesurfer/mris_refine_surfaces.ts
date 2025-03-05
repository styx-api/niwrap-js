// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_REFINE_SURFACES_METADATA: Metadata = {
    id: "afa5fdcf50348032d468a3e07292675e06d5374e.boutiques",
    name: "mris_refine_surfaces",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisRefineSurfacesParameters {
    "__STYXTYPE__": "mris_refine_surfaces";
    "subject_name": string;
    "hemi": string;
    "hires_volume": string;
    "label_file": string;
    "low_to_hires_xfm"?: string | null | undefined;
    "sdir"?: string | null | undefined;
    "use_mgz": boolean;
    "suffix"?: string | null | undefined;
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
        "mris_refine_surfaces": mris_refine_surfaces_cargs,
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
        "mris_refine_surfaces": mris_refine_surfaces_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_refine_surfaces(...)`.
 *
 * @interface
 */
interface MrisRefineSurfacesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Refined pial surface for the specified region
     */
    pial_surface: OutputPathType;
    /**
     * Refined white matter surface for the specified region
     */
    white_surface: OutputPathType;
}


function mris_refine_surfaces_params(
    subject_name: string,
    hemi: string,
    hires_volume: string,
    label_file: string,
    low_to_hires_xfm: string | null = null,
    sdir: string | null = null,
    use_mgz: boolean = false,
    suffix: string | null = null,
): MrisRefineSurfacesParameters {
    /**
     * Build parameters.
    
     * @param subject_name The name of the subject
     * @param hemi The hemisphere to process ('lh' for left hemisphere, 'rh' for right hemisphere)
     * @param hires_volume The high-resolution volume filename
     * @param label_file The label file specifying the region to refine
     * @param low_to_hires_xfm The optional low to high resolution transform file
     * @param sdir Specify the SUBJECTS_DIR
     * @param use_mgz Use .mgz volumes
     * @param suffix Add specified suffix to the final surfaces
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_refine_surfaces" as const,
        "subject_name": subject_name,
        "hemi": hemi,
        "hires_volume": hires_volume,
        "label_file": label_file,
        "use_mgz": use_mgz,
    };
    if (low_to_hires_xfm !== null) {
        params["low_to_hires_xfm"] = low_to_hires_xfm;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (suffix !== null) {
        params["suffix"] = suffix;
    }
    return params;
}


function mris_refine_surfaces_cargs(
    params: MrisRefineSurfacesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_refine_surfaces");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["hires_volume"] ?? null));
    cargs.push((params["label_file"] ?? null));
    if ((params["low_to_hires_xfm"] ?? null) !== null) {
        cargs.push((params["low_to_hires_xfm"] ?? null));
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "-sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["use_mgz"] ?? null)) {
        cargs.push("-mgz");
    }
    if ((params["suffix"] ?? null) !== null) {
        cargs.push(
            "-suffix",
            (params["suffix"] ?? null)
        );
    }
    return cargs;
}


function mris_refine_surfaces_outputs(
    params: MrisRefineSurfacesParameters,
    execution: Execution,
): MrisRefineSurfacesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisRefineSurfacesOutputs = {
        root: execution.outputFile("."),
        pial_surface: execution.outputFile(["$(SUBJECTS_DIR)/", (params["subject_name"] ?? null), "/surf/", (params["hemi"] ?? null), ".pialhires"].join('')),
        white_surface: execution.outputFile(["$(SUBJECTS_DIR)/", (params["subject_name"] ?? null), "/surf/", (params["hemi"] ?? null), ".whitehires"].join('')),
    };
    return ret;
}


function mris_refine_surfaces_execute(
    params: MrisRefineSurfacesParameters,
    execution: Execution,
): MrisRefineSurfacesOutputs {
    /**
     * Refines cortical surfaces around the region specified by the label file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisRefineSurfacesOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_refine_surfaces_cargs(params, execution)
    const ret = mris_refine_surfaces_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_refine_surfaces(
    subject_name: string,
    hemi: string,
    hires_volume: string,
    label_file: string,
    low_to_hires_xfm: string | null = null,
    sdir: string | null = null,
    use_mgz: boolean = false,
    suffix: string | null = null,
    runner: Runner | null = null,
): MrisRefineSurfacesOutputs {
    /**
     * Refines cortical surfaces around the region specified by the label file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name The name of the subject
     * @param hemi The hemisphere to process ('lh' for left hemisphere, 'rh' for right hemisphere)
     * @param hires_volume The high-resolution volume filename
     * @param label_file The label file specifying the region to refine
     * @param low_to_hires_xfm The optional low to high resolution transform file
     * @param sdir Specify the SUBJECTS_DIR
     * @param use_mgz Use .mgz volumes
     * @param suffix Add specified suffix to the final surfaces
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisRefineSurfacesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_REFINE_SURFACES_METADATA);
    const params = mris_refine_surfaces_params(subject_name, hemi, hires_volume, label_file, low_to_hires_xfm, sdir, use_mgz, suffix)
    return mris_refine_surfaces_execute(params, execution);
}


export {
      MRIS_REFINE_SURFACES_METADATA,
      MrisRefineSurfacesOutputs,
      MrisRefineSurfacesParameters,
      mris_refine_surfaces,
      mris_refine_surfaces_params,
};
