// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IMAGE_MATH_METADATA: Metadata = {
    id: "82ab1b6a89b333ecedac9318d1094ca4109c3bdb.boutiques",
    name: "ImageMath",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface ImageMathParameters {
    "__STYXTYPE__": "ImageMath";
    "image_dimension": 2 | 3 | 4;
    "output_image": string;
    "operations_and_inputs": string;
    "image1": InputPathType;
    "image2"?: InputPathType | null | undefined;
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
        "ImageMath": image_math_cargs,
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
        "ImageMath": image_math_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `image_math(...)`.
 *
 * @interface
 */
interface ImageMathOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting image after processing.
     */
    output_image: OutputPathType;
}


function image_math_params(
    image_dimension: 2 | 3 | 4,
    output_image: string,
    operations_and_inputs: string,
    image1: InputPathType,
    image2: InputPathType | null = null,
): ImageMathParameters {
    /**
     * Build parameters.
    
     * @param image_dimension The dimensionality of the image. Use 2 or 3 for spatial images, and 4 for 4D images like time-series data.
     * @param output_image The output image file resulting from the operations.
     * @param operations_and_inputs Mathematical operations and inputs to be applied on the images.
     * @param image1 The first input image for the operation.
     * @param image2 The second input image for the operation, if required.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ImageMath" as const,
        "image_dimension": image_dimension,
        "output_image": output_image,
        "operations_and_inputs": operations_and_inputs,
        "image1": image1,
    };
    if (image2 !== null) {
        params["image2"] = image2;
    }
    return params;
}


function image_math_cargs(
    params: ImageMathParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ImageMath");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    cargs.push((params["operations_and_inputs"] ?? null));
    cargs.push(execution.inputFile((params["image1"] ?? null)));
    if ((params["image2"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["image2"] ?? null)));
    }
    return cargs;
}


function image_math_outputs(
    params: ImageMathParameters,
    execution: Execution,
): ImageMathOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ImageMathOutputs = {
        root: execution.outputFile("."),
        output_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function image_math_execute(
    params: ImageMathParameters,
    execution: Execution,
): ImageMathOutputs {
    /**
     * A versatile tool for performing various mathematical and manipulation operations on images.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ImageMathOutputs`).
     */
    params = execution.params(params)
    const cargs = image_math_cargs(params, execution)
    const ret = image_math_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function image_math(
    image_dimension: 2 | 3 | 4,
    output_image: string,
    operations_and_inputs: string,
    image1: InputPathType,
    image2: InputPathType | null = null,
    runner: Runner | null = null,
): ImageMathOutputs {
    /**
     * A versatile tool for performing various mathematical and manipulation operations on images.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension The dimensionality of the image. Use 2 or 3 for spatial images, and 4 for 4D images like time-series data.
     * @param output_image The output image file resulting from the operations.
     * @param operations_and_inputs Mathematical operations and inputs to be applied on the images.
     * @param image1 The first input image for the operation.
     * @param image2 The second input image for the operation, if required.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ImageMathOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IMAGE_MATH_METADATA);
    const params = image_math_params(image_dimension, output_image, operations_and_inputs, image1, image2)
    return image_math_execute(params, execution);
}


export {
      IMAGE_MATH_METADATA,
      ImageMathOutputs,
      ImageMathParameters,
      image_math,
      image_math_params,
};
