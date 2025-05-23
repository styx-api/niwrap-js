// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTSUSE_LANDMARK_IMAGES_TO_GET_BSPLINE_DISPLACEMENT_FIELD_METADATA: Metadata = {
    id: "bb975911b3570b50aaf12e5161a598d6bd9e8b04.boutiques",
    name: "ANTSUseLandmarkImagesToGetBSplineDisplacementField",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters {
    "__STYXTYPE__": "ANTSUseLandmarkImagesToGetBSplineDisplacementField";
    "fixed_image_with_labeled_landmarks": InputPathType;
    "moving_image_with_labeled_landmarks": InputPathType;
    "output_displacement_field": string;
    "mesh_size": string;
    "number_of_levels": number;
    "order"?: number | null | undefined;
    "enforce_stationary_boundaries"?: number | null | undefined;
    "landmark_weights"?: InputPathType | null | undefined;
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
        "ANTSUseLandmarkImagesToGetBSplineDisplacementField": antsuse_landmark_images_to_get_bspline_displacement_field_cargs,
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
        "ANTSUseLandmarkImagesToGetBSplineDisplacementField": antsuse_landmark_images_to_get_bspline_displacement_field_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `antsuse_landmark_images_to_get_bspline_displacement_field(...)`.
 *
 * @interface
 */
interface AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resultant displacement field for the registration process.
     */
    displacement_field: OutputPathType;
}


function antsuse_landmark_images_to_get_bspline_displacement_field_params(
    fixed_image_with_labeled_landmarks: InputPathType,
    moving_image_with_labeled_landmarks: InputPathType,
    output_displacement_field: string,
    mesh_size: string,
    number_of_levels: number,
    order: number | null = 3,
    enforce_stationary_boundaries: number | null = 1,
    landmark_weights: InputPathType | null = null,
): AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters {
    /**
     * Build parameters.
    
     * @param fixed_image_with_labeled_landmarks The fixed image with labeled landmarks.
     * @param moving_image_with_labeled_landmarks The moving image with labeled landmarks.
     * @param output_displacement_field The output displacement field file.
     * @param mesh_size The mesh size specified as meshSize[0]xmeshSize[1]x...
     * @param number_of_levels The number of levels in the B-spline hierarchy.
     * @param order The order of the B-spline (default is 3).
     * @param enforce_stationary_boundaries Whether to enforce stationary boundaries (default is 1).
     * @param landmark_weights Optional text file containing landmark weights. Each row is either "label,labelWeight" or "labelWeight". If the latter format is used, the weights are assumed to be arranged in ascending order by label.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ANTSUseLandmarkImagesToGetBSplineDisplacementField" as const,
        "fixed_image_with_labeled_landmarks": fixed_image_with_labeled_landmarks,
        "moving_image_with_labeled_landmarks": moving_image_with_labeled_landmarks,
        "output_displacement_field": output_displacement_field,
        "mesh_size": mesh_size,
        "number_of_levels": number_of_levels,
    };
    if (order !== null) {
        params["order"] = order;
    }
    if (enforce_stationary_boundaries !== null) {
        params["enforce_stationary_boundaries"] = enforce_stationary_boundaries;
    }
    if (landmark_weights !== null) {
        params["landmark_weights"] = landmark_weights;
    }
    return params;
}


function antsuse_landmark_images_to_get_bspline_displacement_field_cargs(
    params: AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ANTSUseLandmarkImagesToGetBSplineDisplacementField");
    cargs.push(execution.inputFile((params["fixed_image_with_labeled_landmarks"] ?? null)));
    cargs.push(execution.inputFile((params["moving_image_with_labeled_landmarks"] ?? null)));
    cargs.push((params["output_displacement_field"] ?? null));
    cargs.push((params["mesh_size"] ?? null));
    cargs.push(String((params["number_of_levels"] ?? null)));
    if ((params["order"] ?? null) !== null) {
        cargs.push(String((params["order"] ?? null)));
    }
    if ((params["enforce_stationary_boundaries"] ?? null) !== null) {
        cargs.push(String((params["enforce_stationary_boundaries"] ?? null)));
    }
    if ((params["landmark_weights"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["landmark_weights"] ?? null)));
    }
    return cargs;
}


function antsuse_landmark_images_to_get_bspline_displacement_field_outputs(
    params: AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters,
    execution: Execution,
): AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs = {
        root: execution.outputFile("."),
        displacement_field: execution.outputFile([(params["output_displacement_field"] ?? null)].join('')),
    };
    return ret;
}


function antsuse_landmark_images_to_get_bspline_displacement_field_execute(
    params: AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters,
    execution: Execution,
): AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs {
    /**
     * We expect the input images to be (1) N-ary (2) in the same physical space as the images you want to register and (3) to have the same landmark points defined within them. Landmarks will be defined from the center of mass of the labels in the input images. You can use ITK-snap to generate the label images. The optional landmarks weights are read from a text file where each row is either: "label,labelWeight" or "labelWeight". If the latter format is used, the label weights are assumed to be arranged in ascending order by label.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs`).
     */
    params = execution.params(params)
    const cargs = antsuse_landmark_images_to_get_bspline_displacement_field_cargs(params, execution)
    const ret = antsuse_landmark_images_to_get_bspline_displacement_field_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function antsuse_landmark_images_to_get_bspline_displacement_field(
    fixed_image_with_labeled_landmarks: InputPathType,
    moving_image_with_labeled_landmarks: InputPathType,
    output_displacement_field: string,
    mesh_size: string,
    number_of_levels: number,
    order: number | null = 3,
    enforce_stationary_boundaries: number | null = 1,
    landmark_weights: InputPathType | null = null,
    runner: Runner | null = null,
): AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs {
    /**
     * We expect the input images to be (1) N-ary (2) in the same physical space as the images you want to register and (3) to have the same landmark points defined within them. Landmarks will be defined from the center of mass of the labels in the input images. You can use ITK-snap to generate the label images. The optional landmarks weights are read from a text file where each row is either: "label,labelWeight" or "labelWeight". If the latter format is used, the label weights are assumed to be arranged in ascending order by label.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param fixed_image_with_labeled_landmarks The fixed image with labeled landmarks.
     * @param moving_image_with_labeled_landmarks The moving image with labeled landmarks.
     * @param output_displacement_field The output displacement field file.
     * @param mesh_size The mesh size specified as meshSize[0]xmeshSize[1]x...
     * @param number_of_levels The number of levels in the B-spline hierarchy.
     * @param order The order of the B-spline (default is 3).
     * @param enforce_stationary_boundaries Whether to enforce stationary boundaries (default is 1).
     * @param landmark_weights Optional text file containing landmark weights. Each row is either "label,labelWeight" or "labelWeight". If the latter format is used, the weights are assumed to be arranged in ascending order by label.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTSUSE_LANDMARK_IMAGES_TO_GET_BSPLINE_DISPLACEMENT_FIELD_METADATA);
    const params = antsuse_landmark_images_to_get_bspline_displacement_field_params(fixed_image_with_labeled_landmarks, moving_image_with_labeled_landmarks, output_displacement_field, mesh_size, number_of_levels, order, enforce_stationary_boundaries, landmark_weights)
    return antsuse_landmark_images_to_get_bspline_displacement_field_execute(params, execution);
}


export {
      ANTSUSE_LANDMARK_IMAGES_TO_GET_BSPLINE_DISPLACEMENT_FIELD_METADATA,
      AntsuseLandmarkImagesToGetBsplineDisplacementFieldOutputs,
      AntsuseLandmarkImagesToGetBsplineDisplacementFieldParameters,
      antsuse_landmark_images_to_get_bspline_displacement_field,
      antsuse_landmark_images_to_get_bspline_displacement_field_params,
};
