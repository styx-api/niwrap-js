// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RESAMPLE_IMAGE_METADATA: Metadata = {
    id: "243da81f65ea0a482b7b69380239da5960d94d94.boutiques",
    name: "ResampleImage",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface ResampleImageParameters {
    "__STYXTYPE__": "ResampleImage";
    "image_dimension": number;
    "input_image": InputPathType;
    "output_image": string;
    "size_spacing": string;
    "interpolate_type"?: "0" | "1" | "2" | "3" | "4" | null | undefined;
    "pixeltype"?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | null | undefined;
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
        "ResampleImage": resample_image_cargs,
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
        "ResampleImage": resample_image_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `resample_image(...)`.
 *
 * @interface
 */
interface ResampleImageOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resultant image after resampling.
     */
    resampled_output_image: OutputPathType;
}


function resample_image_params(
    image_dimension: number,
    input_image: InputPathType,
    output_image: string,
    size_spacing: string,
    interpolate_type: "0" | "1" | "2" | "3" | "4" | null = null,
    pixeltype: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | null = null,
): ResampleImageParameters {
    /**
     * Build parameters.
    
     * @param image_dimension Dimension of the image to be resampled.
     * @param input_image The image file to be resampled.
     * @param output_image The output image file after resampling.
     * @param size_spacing Resampling size and spacing specification, e.g., 'MxNxO'.
     * @param interpolate_type Specifies the interpolation type. 0: linear (default), 1: nearest-neighbor, 2: gaussian, 3: windowedSinc, 4: B-Spline.
     * @param pixeltype Specifies the pixel type of the output image. 0: char, 1: unsigned char, 2: short, 3: unsigned short, 4: int, 5: unsigned int, 6: float (default), 7: double.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ResampleImage" as const,
        "image_dimension": image_dimension,
        "input_image": input_image,
        "output_image": output_image,
        "size_spacing": size_spacing,
    };
    if (interpolate_type !== null) {
        params["interpolate_type"] = interpolate_type;
    }
    if (pixeltype !== null) {
        params["pixeltype"] = pixeltype;
    }
    return params;
}


function resample_image_cargs(
    params: ResampleImageParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ResampleImage");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    cargs.push((params["size_spacing"] ?? null));
    if ((params["interpolate_type"] ?? null) !== null) {
        cargs.push((params["interpolate_type"] ?? null));
    }
    if ((params["pixeltype"] ?? null) !== null) {
        cargs.push((params["pixeltype"] ?? null));
    }
    return cargs;
}


function resample_image_outputs(
    params: ResampleImageParameters,
    execution: Execution,
): ResampleImageOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ResampleImageOutputs = {
        root: execution.outputFile("."),
        resampled_output_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function resample_image_execute(
    params: ResampleImageParameters,
    execution: Execution,
): ResampleImageOutputs {
    /**
     * ResampleImage is a tool used to resample images to specified sizes and spacings, using various interpolation methods and pixel types.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ResampleImageOutputs`).
     */
    params = execution.params(params)
    const cargs = resample_image_cargs(params, execution)
    const ret = resample_image_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function resample_image(
    image_dimension: number,
    input_image: InputPathType,
    output_image: string,
    size_spacing: string,
    interpolate_type: "0" | "1" | "2" | "3" | "4" | null = null,
    pixeltype: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | null = null,
    runner: Runner | null = null,
): ResampleImageOutputs {
    /**
     * ResampleImage is a tool used to resample images to specified sizes and spacings, using various interpolation methods and pixel types.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension Dimension of the image to be resampled.
     * @param input_image The image file to be resampled.
     * @param output_image The output image file after resampling.
     * @param size_spacing Resampling size and spacing specification, e.g., 'MxNxO'.
     * @param interpolate_type Specifies the interpolation type. 0: linear (default), 1: nearest-neighbor, 2: gaussian, 3: windowedSinc, 4: B-Spline.
     * @param pixeltype Specifies the pixel type of the output image. 0: char, 1: unsigned char, 2: short, 3: unsigned short, 4: int, 5: unsigned int, 6: float (default), 7: double.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ResampleImageOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RESAMPLE_IMAGE_METADATA);
    const params = resample_image_params(image_dimension, input_image, output_image, size_spacing, interpolate_type, pixeltype)
    return resample_image_execute(params, execution);
}


export {
      RESAMPLE_IMAGE_METADATA,
      ResampleImageOutputs,
      ResampleImageParameters,
      resample_image,
      resample_image_params,
};
