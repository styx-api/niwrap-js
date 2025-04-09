// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const I_MATH_METADATA: Metadata = {
    id: "d073063ec2007a9533d0bbda7ed07a494030fd90.boutiques",
    name: "iMath",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface IMathParameters {
    "__STYXTYPE__": "iMath";
    "image_dimension": 2 | 3 | 4;
    "output_image": string;
    "operations": string;
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
        "iMath": i_math_cargs,
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
        "iMath": i_math_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `i_math(...)`.
 *
 * @interface
 */
interface IMathOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output image resulting from the operation.
     */
    resulting_image: OutputPathType;
}


function i_math_params(
    image_dimension: 2 | 3 | 4,
    output_image: string,
    operations: string,
    image1: InputPathType,
    image2: InputPathType | null = null,
): IMathParameters {
    /**
     * Build parameters.
    
     * @param image_dimension Dimensionality of the image, either 2, 3, or 4.
     * @param output_image Path for the output image file.
     * @param operations Operations to be performed along with parameters, e.g., GetLargestComponent, MC for Closing, etc.
     * @param image1 First input image file.
     * @param image2 Second input image file, if required by operation.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "iMath" as const,
        "image_dimension": image_dimension,
        "output_image": output_image,
        "operations": operations,
        "image1": image1,
    };
    if (image2 !== null) {
        params["image2"] = image2;
    }
    return params;
}


function i_math_cargs(
    params: IMathParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("iMath");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    cargs.push((params["operations"] ?? null));
    cargs.push(execution.inputFile((params["image1"] ?? null)));
    if ((params["image2"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["image2"] ?? null)));
    }
    return cargs;
}


function i_math_outputs(
    params: IMathParameters,
    execution: Execution,
): IMathOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: IMathOutputs = {
        root: execution.outputFile("."),
        resulting_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function i_math_execute(
    params: IMathParameters,
    execution: Execution,
): IMathOutputs {
    /**
     * iMath is a tool for performing various image mathematical operations on medical images, specifically supporting operations on 2D, 3D, and 4D data.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `IMathOutputs`).
     */
    params = execution.params(params)
    const cargs = i_math_cargs(params, execution)
    const ret = i_math_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function i_math(
    image_dimension: 2 | 3 | 4,
    output_image: string,
    operations: string,
    image1: InputPathType,
    image2: InputPathType | null = null,
    runner: Runner | null = null,
): IMathOutputs {
    /**
     * iMath is a tool for performing various image mathematical operations on medical images, specifically supporting operations on 2D, 3D, and 4D data.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension Dimensionality of the image, either 2, 3, or 4.
     * @param output_image Path for the output image file.
     * @param operations Operations to be performed along with parameters, e.g., GetLargestComponent, MC for Closing, etc.
     * @param image1 First input image file.
     * @param image2 Second input image file, if required by operation.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `IMathOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(I_MATH_METADATA);
    const params = i_math_params(image_dimension, output_image, operations, image1, image2)
    return i_math_execute(params, execution);
}


export {
      IMathOutputs,
      IMathParameters,
      I_MATH_METADATA,
      i_math,
      i_math_params,
};
