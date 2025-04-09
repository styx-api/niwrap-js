// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SMOOTH_DISPLACEMENT_FIELD_METADATA: Metadata = {
    id: "7b2437454393f060b65a9e4b3b1f97abf404bcc0.boutiques",
    name: "SmoothDisplacementField",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface SmoothDisplacementFieldParameters {
    "__STYXTYPE__": "SmoothDisplacementField";
    "image_dimension": number;
    "input_field": InputPathType;
    "output_field": string;
    "variance_or_mesh_size_base_level": number;
    "number_of_levels"?: number | null | undefined;
    "spline_order"?: number | null | undefined;
    "estimate_inverse"?: 0 | 1 | null | undefined;
    "confidence_image"?: InputPathType | null | undefined;
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
        "SmoothDisplacementField": smooth_displacement_field_cargs,
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
        "SmoothDisplacementField": smooth_displacement_field_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `smooth_displacement_field(...)`.
 *
 * @interface
 */
interface SmoothDisplacementFieldOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output file containing the smoothed displacement field.
     */
    smoothed_field: OutputPathType;
    /**
     * The output file containing confidence information from the smoothing process.
     */
    confidence_image_out: OutputPathType | null;
}


function smooth_displacement_field_params(
    image_dimension: number,
    input_field: InputPathType,
    output_field: string,
    variance_or_mesh_size_base_level: number,
    number_of_levels: number | null = 1,
    spline_order: number | null = 3,
    estimate_inverse: 0 | 1 | null = 0,
    confidence_image: InputPathType | null = null,
): SmoothDisplacementFieldParameters {
    /**
     * Build parameters.
    
     * @param image_dimension The dimensionality of the input displacement field.
     * @param input_field The input displacement field file.
     * @param output_field The output file for the smoothed displacement field.
     * @param variance_or_mesh_size_base_level The variance for Gaussian smoothing or mesh size at the base level for B-spline smoothing.
     * @param number_of_levels The number of levels for multi-resolution smoothing.
     * @param spline_order The order of the spline for B-spline smoothing.
     * @param estimate_inverse Estimate the inverse of the displacement field if set to 1.
     * @param confidence_image Optional confidence image output of the smoothing process.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SmoothDisplacementField" as const,
        "image_dimension": image_dimension,
        "input_field": input_field,
        "output_field": output_field,
        "variance_or_mesh_size_base_level": variance_or_mesh_size_base_level,
    };
    if (number_of_levels !== null) {
        params["number_of_levels"] = number_of_levels;
    }
    if (spline_order !== null) {
        params["spline_order"] = spline_order;
    }
    if (estimate_inverse !== null) {
        params["estimate_inverse"] = estimate_inverse;
    }
    if (confidence_image !== null) {
        params["confidence_image"] = confidence_image;
    }
    return params;
}


function smooth_displacement_field_cargs(
    params: SmoothDisplacementFieldParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SmoothDisplacementField");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push(execution.inputFile((params["input_field"] ?? null)));
    cargs.push((params["output_field"] ?? null));
    cargs.push(String((params["variance_or_mesh_size_base_level"] ?? null)));
    if ((params["number_of_levels"] ?? null) !== null) {
        cargs.push(String((params["number_of_levels"] ?? null)));
    }
    if ((params["spline_order"] ?? null) !== null) {
        cargs.push(String((params["spline_order"] ?? null)));
    }
    if ((params["estimate_inverse"] ?? null) !== null) {
        cargs.push(String((params["estimate_inverse"] ?? null)));
    }
    if ((params["confidence_image"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["confidence_image"] ?? null)));
    }
    return cargs;
}


function smooth_displacement_field_outputs(
    params: SmoothDisplacementFieldParameters,
    execution: Execution,
): SmoothDisplacementFieldOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SmoothDisplacementFieldOutputs = {
        root: execution.outputFile("."),
        smoothed_field: execution.outputFile([(params["output_field"] ?? null)].join('')),
        confidence_image_out: ((params["confidence_image"] ?? null) !== null) ? execution.outputFile([path.basename((params["confidence_image"] ?? null))].join('')) : null,
    };
    return ret;
}


function smooth_displacement_field_execute(
    params: SmoothDisplacementFieldParameters,
    execution: Execution,
): SmoothDisplacementFieldOutputs {
    /**
     * SmoothDisplacementField applies smoothing to a displacement field over a specified number of levels with optional parameters for spline order, inverse estimation, and confidence image output.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SmoothDisplacementFieldOutputs`).
     */
    params = execution.params(params)
    const cargs = smooth_displacement_field_cargs(params, execution)
    const ret = smooth_displacement_field_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function smooth_displacement_field(
    image_dimension: number,
    input_field: InputPathType,
    output_field: string,
    variance_or_mesh_size_base_level: number,
    number_of_levels: number | null = 1,
    spline_order: number | null = 3,
    estimate_inverse: 0 | 1 | null = 0,
    confidence_image: InputPathType | null = null,
    runner: Runner | null = null,
): SmoothDisplacementFieldOutputs {
    /**
     * SmoothDisplacementField applies smoothing to a displacement field over a specified number of levels with optional parameters for spline order, inverse estimation, and confidence image output.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension The dimensionality of the input displacement field.
     * @param input_field The input displacement field file.
     * @param output_field The output file for the smoothed displacement field.
     * @param variance_or_mesh_size_base_level The variance for Gaussian smoothing or mesh size at the base level for B-spline smoothing.
     * @param number_of_levels The number of levels for multi-resolution smoothing.
     * @param spline_order The order of the spline for B-spline smoothing.
     * @param estimate_inverse Estimate the inverse of the displacement field if set to 1.
     * @param confidence_image Optional confidence image output of the smoothing process.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SmoothDisplacementFieldOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SMOOTH_DISPLACEMENT_FIELD_METADATA);
    const params = smooth_displacement_field_params(image_dimension, input_field, output_field, variance_or_mesh_size_base_level, number_of_levels, spline_order, estimate_inverse, confidence_image)
    return smooth_displacement_field_execute(params, execution);
}


export {
      SMOOTH_DISPLACEMENT_FIELD_METADATA,
      SmoothDisplacementFieldOutputs,
      SmoothDisplacementFieldParameters,
      smooth_displacement_field,
      smooth_displacement_field_params,
};
