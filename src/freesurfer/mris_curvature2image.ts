// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_CURVATURE2IMAGE_METADATA: Metadata = {
    id: "9ccee59651e31ee7ee611ecd70b9689056081813.boutiques",
    name: "mris_curvature2image",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisCurvature2imageParameters {
    "__STYXTYPE__": "mris_curvature2image";
    "surface": InputPathType;
    "mask": InputPathType;
    "output_overlay": string;
    "output_distance": string;
    "overlay": InputPathType;
    "label": InputPathType;
    "invert_flag": boolean;
    "radius": number;
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
        "mris_curvature2image": mris_curvature2image_cargs,
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
        "mris_curvature2image": mris_curvature2image_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_curvature2image(...)`.
 *
 * @interface
 */
interface MrisCurvature2imageOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated overlay image file.
     */
    output_overlay_img: OutputPathType;
    /**
     * Generated distance image file.
     */
    output_distance_img: OutputPathType;
}


function mris_curvature2image_params(
    surface: InputPathType,
    mask: InputPathType,
    output_overlay: string,
    output_distance: string,
    overlay: InputPathType,
    label: InputPathType,
    radius: number,
    invert_flag: boolean = false,
): MrisCurvature2imageParameters {
    /**
     * Build parameters.
    
     * @param surface Input surface file.
     * @param mask Input mask file.
     * @param output_overlay Output overlay image file.
     * @param output_distance Output distance image file.
     * @param overlay Overlay file.
     * @param label Label file.
     * @param radius Radius value for processing.
     * @param invert_flag Flag to invert the curvature values.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_curvature2image" as const,
        "surface": surface,
        "mask": mask,
        "output_overlay": output_overlay,
        "output_distance": output_distance,
        "overlay": overlay,
        "label": label,
        "invert_flag": invert_flag,
        "radius": radius,
    };
    return params;
}


function mris_curvature2image_cargs(
    params: MrisCurvature2imageParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_curvature2image");
    cargs.push(
        "-s",
        execution.inputFile((params["surface"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["mask"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_overlay"] ?? null)
    );
    cargs.push(
        "-d",
        (params["output_distance"] ?? null)
    );
    cargs.push(
        "-c",
        execution.inputFile((params["overlay"] ?? null))
    );
    cargs.push(
        "-l",
        execution.inputFile((params["label"] ?? null))
    );
    if ((params["invert_flag"] ?? null)) {
        cargs.push("-inv");
    }
    cargs.push(
        "-r",
        String((params["radius"] ?? null))
    );
    return cargs;
}


function mris_curvature2image_outputs(
    params: MrisCurvature2imageParameters,
    execution: Execution,
): MrisCurvature2imageOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisCurvature2imageOutputs = {
        root: execution.outputFile("."),
        output_overlay_img: execution.outputFile([(params["output_overlay"] ?? null)].join('')),
        output_distance_img: execution.outputFile([(params["output_distance"] ?? null)].join('')),
    };
    return ret;
}


function mris_curvature2image_execute(
    params: MrisCurvature2imageParameters,
    execution: Execution,
): MrisCurvature2imageOutputs {
    /**
     * Tool to convert surface curvature data to an image using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisCurvature2imageOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_curvature2image_cargs(params, execution)
    const ret = mris_curvature2image_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_curvature2image(
    surface: InputPathType,
    mask: InputPathType,
    output_overlay: string,
    output_distance: string,
    overlay: InputPathType,
    label: InputPathType,
    radius: number,
    invert_flag: boolean = false,
    runner: Runner | null = null,
): MrisCurvature2imageOutputs {
    /**
     * Tool to convert surface curvature data to an image using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface Input surface file.
     * @param mask Input mask file.
     * @param output_overlay Output overlay image file.
     * @param output_distance Output distance image file.
     * @param overlay Overlay file.
     * @param label Label file.
     * @param radius Radius value for processing.
     * @param invert_flag Flag to invert the curvature values.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisCurvature2imageOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_CURVATURE2IMAGE_METADATA);
    const params = mris_curvature2image_params(surface, mask, output_overlay, output_distance, overlay, label, radius, invert_flag)
    return mris_curvature2image_execute(params, execution);
}


export {
      MRIS_CURVATURE2IMAGE_METADATA,
      MrisCurvature2imageOutputs,
      MrisCurvature2imageParameters,
      mris_curvature2image,
      mris_curvature2image_params,
};
