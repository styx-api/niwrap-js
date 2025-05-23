// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_THICKNESS_METADATA: Metadata = {
    id: "219cc09086fcb3e40767c96cbad6d1655bbeeb34.boutiques",
    name: "mris_thickness",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisThicknessParameters {
    "__STYXTYPE__": "mris_thickness";
    "subject_name": string;
    "hemi": string;
    "thickness_file": string;
    "max_threshold"?: number | null | undefined;
    "fill_holes"?: Array<string> | null | undefined;
    "thickness_from_seg"?: Array<string> | null | undefined;
    "vector": boolean;
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
        "mris_thickness": mris_thickness_cargs,
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
        "mris_thickness": mris_thickness_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_thickness(...)`.
 *
 * @interface
 */
interface MrisThicknessOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output curvature file containing thickness measurements.
     */
    output_thickness_file: OutputPathType;
}


function mris_thickness_params(
    subject_name: string,
    hemi: string,
    thickness_file: string,
    max_threshold: number | null = null,
    fill_holes: Array<string> | null = null,
    thickness_from_seg: Array<string> | null = null,
    vector: boolean = false,
): MrisThicknessParameters {
    /**
     * Build parameters.
    
     * @param subject_name The subject name for processing.
     * @param hemi The hemisphere to process (e.g., lh or rh).
     * @param thickness_file Output file for thickness measurements.
     * @param max_threshold Use a maximum threshold for thickness (default is 5mm).
     * @param fill_holes Fill in thickness in holes in the cortex label using fsaverage cortex label.
     * @param thickness_from_seg Compute thickness from segmentation. Requires the following parameters: surf label, seg.mgz, dmaxmm, ddeltamm, and output.mgz.
     * @param vector Compute the thickness using a variationally derived vector field.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_thickness" as const,
        "subject_name": subject_name,
        "hemi": hemi,
        "thickness_file": thickness_file,
        "vector": vector,
    };
    if (max_threshold !== null) {
        params["max_threshold"] = max_threshold;
    }
    if (fill_holes !== null) {
        params["fill_holes"] = fill_holes;
    }
    if (thickness_from_seg !== null) {
        params["thickness_from_seg"] = thickness_from_seg;
    }
    return params;
}


function mris_thickness_cargs(
    params: MrisThicknessParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_thickness");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["thickness_file"] ?? null));
    if ((params["max_threshold"] ?? null) !== null) {
        cargs.push(
            "-max",
            String((params["max_threshold"] ?? null))
        );
    }
    if ((params["fill_holes"] ?? null) !== null) {
        cargs.push(
            "-fill_holes",
            ...(params["fill_holes"] ?? null)
        );
    }
    if ((params["thickness_from_seg"] ?? null) !== null) {
        cargs.push(
            "-thickness-from-seg",
            ...(params["thickness_from_seg"] ?? null)
        );
    }
    if ((params["vector"] ?? null)) {
        cargs.push("-vector");
    }
    return cargs;
}


function mris_thickness_outputs(
    params: MrisThicknessParameters,
    execution: Execution,
): MrisThicknessOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisThicknessOutputs = {
        root: execution.outputFile("."),
        output_thickness_file: execution.outputFile([(params["thickness_file"] ?? null)].join('')),
    };
    return ret;
}


function mris_thickness_execute(
    params: MrisThicknessParameters,
    execution: Execution,
): MrisThicknessOutputs {
    /**
     * Measures the thickness of the cortical surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisThicknessOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_thickness_cargs(params, execution)
    const ret = mris_thickness_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_thickness(
    subject_name: string,
    hemi: string,
    thickness_file: string,
    max_threshold: number | null = null,
    fill_holes: Array<string> | null = null,
    thickness_from_seg: Array<string> | null = null,
    vector: boolean = false,
    runner: Runner | null = null,
): MrisThicknessOutputs {
    /**
     * Measures the thickness of the cortical surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name The subject name for processing.
     * @param hemi The hemisphere to process (e.g., lh or rh).
     * @param thickness_file Output file for thickness measurements.
     * @param max_threshold Use a maximum threshold for thickness (default is 5mm).
     * @param fill_holes Fill in thickness in holes in the cortex label using fsaverage cortex label.
     * @param thickness_from_seg Compute thickness from segmentation. Requires the following parameters: surf label, seg.mgz, dmaxmm, ddeltamm, and output.mgz.
     * @param vector Compute the thickness using a variationally derived vector field.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisThicknessOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_THICKNESS_METADATA);
    const params = mris_thickness_params(subject_name, hemi, thickness_file, max_threshold, fill_holes, thickness_from_seg, vector)
    return mris_thickness_execute(params, execution);
}


export {
      MRIS_THICKNESS_METADATA,
      MrisThicknessOutputs,
      MrisThicknessParameters,
      mris_thickness,
      mris_thickness_params,
};
