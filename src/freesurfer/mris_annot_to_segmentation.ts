// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_ANNOT_TO_SEGMENTATION_METADATA: Metadata = {
    id: "f2187529fdf57449595cf8d2c0a0b2fc7b737908.boutiques",
    name: "mris_annot_to_segmentation",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisAnnotToSegmentationParameters {
    "__STYXTYPE__": "mris_annot_to_segmentation";
    "subject_name": string;
    "hemi": string;
    "surface": string;
    "annot_file": InputPathType;
    "color_table": InputPathType;
    "output_volume": string;
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
        "mris_annot_to_segmentation": mris_annot_to_segmentation_cargs,
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
        "mris_annot_to_segmentation": mris_annot_to_segmentation_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_annot_to_segmentation(...)`.
 *
 * @interface
 */
interface MrisAnnotToSegmentationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated segmentation volume.
     */
    output_volume_file: OutputPathType;
}


function mris_annot_to_segmentation_params(
    subject_name: string,
    hemi: string,
    surface: string,
    annot_file: InputPathType,
    color_table: InputPathType,
    output_volume: string,
): MrisAnnotToSegmentationParameters {
    /**
     * Build parameters.
    
     * @param subject_name Subject name.
     * @param hemi Hemisphere (e.g., lh or rh).
     * @param surface Surface file.
     * @param annot_file Annotation file.
     * @param color_table Color table file.
     * @param output_volume Output volume file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_annot_to_segmentation" as const,
        "subject_name": subject_name,
        "hemi": hemi,
        "surface": surface,
        "annot_file": annot_file,
        "color_table": color_table,
        "output_volume": output_volume,
    };
    return params;
}


function mris_annot_to_segmentation_cargs(
    params: MrisAnnotToSegmentationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_annot_to_segmentation");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["surface"] ?? null));
    cargs.push(execution.inputFile((params["annot_file"] ?? null)));
    cargs.push(execution.inputFile((params["color_table"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function mris_annot_to_segmentation_outputs(
    params: MrisAnnotToSegmentationParameters,
    execution: Execution,
): MrisAnnotToSegmentationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisAnnotToSegmentationOutputs = {
        root: execution.outputFile("."),
        output_volume_file: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mris_annot_to_segmentation_execute(
    params: MrisAnnotToSegmentationParameters,
    execution: Execution,
): MrisAnnotToSegmentationOutputs {
    /**
     * Converts annotation files to segmentation volumes in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisAnnotToSegmentationOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_annot_to_segmentation_cargs(params, execution)
    const ret = mris_annot_to_segmentation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_annot_to_segmentation(
    subject_name: string,
    hemi: string,
    surface: string,
    annot_file: InputPathType,
    color_table: InputPathType,
    output_volume: string,
    runner: Runner | null = null,
): MrisAnnotToSegmentationOutputs {
    /**
     * Converts annotation files to segmentation volumes in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name Subject name.
     * @param hemi Hemisphere (e.g., lh or rh).
     * @param surface Surface file.
     * @param annot_file Annotation file.
     * @param color_table Color table file.
     * @param output_volume Output volume file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisAnnotToSegmentationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_ANNOT_TO_SEGMENTATION_METADATA);
    const params = mris_annot_to_segmentation_params(subject_name, hemi, surface, annot_file, color_table, output_volume)
    return mris_annot_to_segmentation_execute(params, execution);
}


export {
      MRIS_ANNOT_TO_SEGMENTATION_METADATA,
      MrisAnnotToSegmentationOutputs,
      MrisAnnotToSegmentationParameters,
      mris_annot_to_segmentation,
      mris_annot_to_segmentation_params,
};
