// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CREATE_DISPLACEMENT_FIELD_METADATA: Metadata = {
    id: "4dbaa9ddf35cec6b6f78e7c9efdb17f6f5f6d1e2.boutiques",
    name: "CreateDisplacementField",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface CreateDisplacementFieldParameters {
    "__STYXTYPE__": "CreateDisplacementField";
    "image_dimension": number;
    "enforce_zero_boundary_flag": 0 | 1;
    "component_images": Array<InputPathType>;
    "output_image": string;
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
        "CreateDisplacementField": create_displacement_field_cargs,
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
        "CreateDisplacementField": create_displacement_field_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `create_displacement_field(...)`.
 *
 * @interface
 */
interface CreateDisplacementFieldOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The generated itkImage of itkVector pixels representing the displacement field.
     */
    output_displacement_field: OutputPathType;
}


function create_displacement_field_params(
    image_dimension: number,
    enforce_zero_boundary_flag: 0 | 1,
    component_images: Array<InputPathType>,
    output_image: string,
): CreateDisplacementFieldParameters {
    /**
     * Build parameters.
    
     * @param image_dimension The dimension of the image, typically 2 or 3.
     * @param enforce_zero_boundary_flag Create zero-valued vectors along the borders when enabled (pass 1), recommended for better displacement field behavior.
     * @param component_images Input component images, each used for a vector component. All component images must have the same size, offset, origin, and spacing.
     * @param output_image The output displacement field image with itkVector pixels.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "CreateDisplacementField" as const,
        "image_dimension": image_dimension,
        "enforce_zero_boundary_flag": enforce_zero_boundary_flag,
        "component_images": component_images,
        "output_image": output_image,
    };
    return params;
}


function create_displacement_field_cargs(
    params: CreateDisplacementFieldParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("CreateDisplacementField");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push(String((params["enforce_zero_boundary_flag"] ?? null)));
    cargs.push(...(params["component_images"] ?? null).map(f => execution.inputFile(f)));
    cargs.push((params["output_image"] ?? null));
    return cargs;
}


function create_displacement_field_outputs(
    params: CreateDisplacementFieldParameters,
    execution: Execution,
): CreateDisplacementFieldOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CreateDisplacementFieldOutputs = {
        root: execution.outputFile("."),
        output_displacement_field: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function create_displacement_field_execute(
    params: CreateDisplacementFieldParameters,
    execution: Execution,
): CreateDisplacementFieldOutputs {
    /**
     * Create an itkImage of itkVector pixels (NOT an itkVectorImage), using each scalar input component image for each vector component. An itkImage of itkVectors is the standard type for displacement fields in ITK. All component images (up to 8) are assumed to have the same size, offset, origin, and spacing. The 'EnforceZeroBoundaryFlag' option will create zero-valued vectors along the borders when enabled (pass 1), and is recommended for better displacement field behavior.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CreateDisplacementFieldOutputs`).
     */
    params = execution.params(params)
    const cargs = create_displacement_field_cargs(params, execution)
    const ret = create_displacement_field_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function create_displacement_field(
    image_dimension: number,
    enforce_zero_boundary_flag: 0 | 1,
    component_images: Array<InputPathType>,
    output_image: string,
    runner: Runner | null = null,
): CreateDisplacementFieldOutputs {
    /**
     * Create an itkImage of itkVector pixels (NOT an itkVectorImage), using each scalar input component image for each vector component. An itkImage of itkVectors is the standard type for displacement fields in ITK. All component images (up to 8) are assumed to have the same size, offset, origin, and spacing. The 'EnforceZeroBoundaryFlag' option will create zero-valued vectors along the borders when enabled (pass 1), and is recommended for better displacement field behavior.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension The dimension of the image, typically 2 or 3.
     * @param enforce_zero_boundary_flag Create zero-valued vectors along the borders when enabled (pass 1), recommended for better displacement field behavior.
     * @param component_images Input component images, each used for a vector component. All component images must have the same size, offset, origin, and spacing.
     * @param output_image The output displacement field image with itkVector pixels.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CreateDisplacementFieldOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CREATE_DISPLACEMENT_FIELD_METADATA);
    const params = create_displacement_field_params(image_dimension, enforce_zero_boundary_flag, component_images, output_image)
    return create_displacement_field_execute(params, execution);
}


export {
      CREATE_DISPLACEMENT_FIELD_METADATA,
      CreateDisplacementFieldOutputs,
      CreateDisplacementFieldParameters,
      create_displacement_field,
      create_displacement_field_params,
};
