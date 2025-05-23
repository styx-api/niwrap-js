// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_MULTIMODAL_METADATA: Metadata = {
    id: "31df0ef92422bdefc56b3c5c0422ab3e36e55274.boutiques",
    name: "mris_multimodal",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisMultimodalParameters {
    "__STYXTYPE__": "mris_multimodal";
    "input_surface": InputPathType;
    "target_surface": InputPathType;
    "output_surface": string;
    "fill_holes": boolean;
    "curvature": boolean;
    "thickness": boolean;
    "annotation_output": string;
    "overlay_output": string;
    "csv_output": string;
    "vtk_output": boolean;
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
        "mris_multimodal": mris_multimodal_cargs,
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
        "mris_multimodal": mris_multimodal_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_multimodal(...)`.
 *
 * @interface
 */
interface MrisMultimodalOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Processed output surface file.
     */
    processed_output_surface: OutputPathType;
    /**
     * Output file containing annotation data.
     */
    annotation_output_file: OutputPathType;
    /**
     * Output file containing overlay data.
     */
    overlay_output_file: OutputPathType;
    /**
     * Output CSV file.
     */
    csv_output_file: OutputPathType;
}


function mris_multimodal_params(
    input_surface: InputPathType,
    target_surface: InputPathType,
    output_surface: string,
    annotation_output: string,
    overlay_output: string,
    csv_output: string,
    fill_holes: boolean = false,
    curvature: boolean = false,
    thickness: boolean = false,
    vtk_output: boolean = false,
): MrisMultimodalParameters {
    /**
     * Build parameters.
    
     * @param input_surface Input surface file.
     * @param target_surface Target surface file.
     * @param output_surface Output surface file.
     * @param annotation_output Output file for annotation data.
     * @param overlay_output Output file for overlay data.
     * @param csv_output Output CSV file.
     * @param fill_holes Flag to fill holes in the surface.
     * @param curvature Flag to process curvature data.
     * @param thickness Flag to process thickness data.
     * @param vtk_output Flag to output VTK file format.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_multimodal" as const,
        "input_surface": input_surface,
        "target_surface": target_surface,
        "output_surface": output_surface,
        "fill_holes": fill_holes,
        "curvature": curvature,
        "thickness": thickness,
        "annotation_output": annotation_output,
        "overlay_output": overlay_output,
        "csv_output": csv_output,
        "vtk_output": vtk_output,
    };
    return params;
}


function mris_multimodal_cargs(
    params: MrisMultimodalParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_multimodal");
    cargs.push(
        "-i",
        execution.inputFile((params["input_surface"] ?? null))
    );
    cargs.push(
        "-t",
        execution.inputFile((params["target_surface"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_surface"] ?? null)
    );
    if ((params["fill_holes"] ?? null)) {
        cargs.push("-fillHoles");
    }
    if ((params["curvature"] ?? null)) {
        cargs.push("--curvature");
    }
    if ((params["thickness"] ?? null)) {
        cargs.push("--thickness");
    }
    cargs.push(
        "-a",
        (params["annotation_output"] ?? null)
    );
    cargs.push(
        "-v",
        (params["overlay_output"] ?? null)
    );
    cargs.push(
        "-c",
        (params["csv_output"] ?? null)
    );
    if ((params["vtk_output"] ?? null)) {
        cargs.push("-vtk");
    }
    return cargs;
}


function mris_multimodal_outputs(
    params: MrisMultimodalParameters,
    execution: Execution,
): MrisMultimodalOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisMultimodalOutputs = {
        root: execution.outputFile("."),
        processed_output_surface: execution.outputFile([(params["output_surface"] ?? null)].join('')),
        annotation_output_file: execution.outputFile([(params["annotation_output"] ?? null)].join('')),
        overlay_output_file: execution.outputFile([(params["overlay_output"] ?? null)].join('')),
        csv_output_file: execution.outputFile([(params["csv_output"] ?? null)].join('')),
    };
    return ret;
}


function mris_multimodal_execute(
    params: MrisMultimodalParameters,
    execution: Execution,
): MrisMultimodalOutputs {
    /**
     * A FreeSurfer tool for processing multimodal surface data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisMultimodalOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_multimodal_cargs(params, execution)
    const ret = mris_multimodal_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_multimodal(
    input_surface: InputPathType,
    target_surface: InputPathType,
    output_surface: string,
    annotation_output: string,
    overlay_output: string,
    csv_output: string,
    fill_holes: boolean = false,
    curvature: boolean = false,
    thickness: boolean = false,
    vtk_output: boolean = false,
    runner: Runner | null = null,
): MrisMultimodalOutputs {
    /**
     * A FreeSurfer tool for processing multimodal surface data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface Input surface file.
     * @param target_surface Target surface file.
     * @param output_surface Output surface file.
     * @param annotation_output Output file for annotation data.
     * @param overlay_output Output file for overlay data.
     * @param csv_output Output CSV file.
     * @param fill_holes Flag to fill holes in the surface.
     * @param curvature Flag to process curvature data.
     * @param thickness Flag to process thickness data.
     * @param vtk_output Flag to output VTK file format.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisMultimodalOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_MULTIMODAL_METADATA);
    const params = mris_multimodal_params(input_surface, target_surface, output_surface, annotation_output, overlay_output, csv_output, fill_holes, curvature, thickness, vtk_output)
    return mris_multimodal_execute(params, execution);
}


export {
      MRIS_MULTIMODAL_METADATA,
      MrisMultimodalOutputs,
      MrisMultimodalParameters,
      mris_multimodal,
      mris_multimodal_params,
};
