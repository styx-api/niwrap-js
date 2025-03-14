// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const WARP_TIME_SERIES_IMAGE_MULTI_TRANSFORM_METADATA: Metadata = {
    id: "02d7706a3d3c92924bed3c01a243b77e5b1a013b.boutiques",
    name: "WarpTimeSeriesImageMultiTransform",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface WarpTimeSeriesImageMultiTransformParameters {
    "__STYXTYPE__": "WarpTimeSeriesImageMultiTransform";
    "image_dimension": 3 | 4;
    "moving_image": InputPathType;
    "output_image": string;
    "reference_image": InputPathType;
    "transforms": Array<string>;
    "interpolation"?: "NearestNeighbor" | "BSpline" | null | undefined;
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
        "WarpTimeSeriesImageMultiTransform": warp_time_series_image_multi_transform_cargs,
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
        "WarpTimeSeriesImageMultiTransform": warp_time_series_image_multi_transform_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `warp_time_series_image_multi_transform(...)`.
 *
 * @interface
 */
interface WarpTimeSeriesImageMultiTransformOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The transformed image that is saved as output.
     */
    output_image_result: OutputPathType;
}


function warp_time_series_image_multi_transform_params(
    image_dimension: 3 | 4,
    moving_image: InputPathType,
    output_image: string,
    reference_image: InputPathType,
    transforms: Array<string>,
    interpolation: "NearestNeighbor" | "BSpline" | null = null,
): WarpTimeSeriesImageMultiTransformParameters {
    /**
     * Build parameters.
    
     * @param image_dimension The dimensionality of the input images (3D or 4D).
     * @param moving_image The image to which the transformation will be applied. It can be a 3D image with vector voxels or a 4D image with scalar voxels.
     * @param output_image The output image after transformation. It is resampled based on the reference image domain.
     * @param reference_image The reference image that defines the space into which the input image will be warped.
     * @param transforms A list of transformation files, such as affine transformation matrices and warps, applied in sequence.
     * @param interpolation Specifies the type of interpolation to use: Nearest Neighbor or 3rd order B-Spline.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "WarpTimeSeriesImageMultiTransform" as const,
        "image_dimension": image_dimension,
        "moving_image": moving_image,
        "output_image": output_image,
        "reference_image": reference_image,
        "transforms": transforms,
    };
    if (interpolation !== null) {
        params["interpolation"] = interpolation;
    }
    return params;
}


function warp_time_series_image_multi_transform_cargs(
    params: WarpTimeSeriesImageMultiTransformParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("WarpTimeSeriesImageMultiTransform");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push(execution.inputFile((params["moving_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    cargs.push(
        "-R",
        execution.inputFile((params["reference_image"] ?? null))
    );
    cargs.push(...(params["transforms"] ?? null));
    if ((params["interpolation"] ?? null) !== null) {
        cargs.push((params["interpolation"] ?? null));
    }
    return cargs;
}


function warp_time_series_image_multi_transform_outputs(
    params: WarpTimeSeriesImageMultiTransformParameters,
    execution: Execution,
): WarpTimeSeriesImageMultiTransformOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: WarpTimeSeriesImageMultiTransformOutputs = {
        root: execution.outputFile("."),
        output_image_result: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function warp_time_series_image_multi_transform_execute(
    params: WarpTimeSeriesImageMultiTransformParameters,
    execution: Execution,
): WarpTimeSeriesImageMultiTransformOutputs {
    /**
     * WarpTimeSeriesImageMultiTransform is a tool used to apply a series of transformations to a time series image, either forward or reverse, using affine transforms and warps.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `WarpTimeSeriesImageMultiTransformOutputs`).
     */
    params = execution.params(params)
    const cargs = warp_time_series_image_multi_transform_cargs(params, execution)
    const ret = warp_time_series_image_multi_transform_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function warp_time_series_image_multi_transform(
    image_dimension: 3 | 4,
    moving_image: InputPathType,
    output_image: string,
    reference_image: InputPathType,
    transforms: Array<string>,
    interpolation: "NearestNeighbor" | "BSpline" | null = null,
    runner: Runner | null = null,
): WarpTimeSeriesImageMultiTransformOutputs {
    /**
     * WarpTimeSeriesImageMultiTransform is a tool used to apply a series of transformations to a time series image, either forward or reverse, using affine transforms and warps.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension The dimensionality of the input images (3D or 4D).
     * @param moving_image The image to which the transformation will be applied. It can be a 3D image with vector voxels or a 4D image with scalar voxels.
     * @param output_image The output image after transformation. It is resampled based on the reference image domain.
     * @param reference_image The reference image that defines the space into which the input image will be warped.
     * @param transforms A list of transformation files, such as affine transformation matrices and warps, applied in sequence.
     * @param interpolation Specifies the type of interpolation to use: Nearest Neighbor or 3rd order B-Spline.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `WarpTimeSeriesImageMultiTransformOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(WARP_TIME_SERIES_IMAGE_MULTI_TRANSFORM_METADATA);
    const params = warp_time_series_image_multi_transform_params(image_dimension, moving_image, output_image, reference_image, transforms, interpolation)
    return warp_time_series_image_multi_transform_execute(params, execution);
}


export {
      WARP_TIME_SERIES_IMAGE_MULTI_TRANSFORM_METADATA,
      WarpTimeSeriesImageMultiTransformOutputs,
      WarpTimeSeriesImageMultiTransformParameters,
      warp_time_series_image_multi_transform,
      warp_time_series_image_multi_transform_params,
};
