// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const KELLY_KAPOWSKI_METADATA: Metadata = {
    id: "8cf867e1228b8566e73919051e43b36f34a80495.boutiques",
    name: "KellyKapowski",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface KellyKapowskiParameters {
    "__STYXTYPE__": "KellyKapowski";
    "image_dimensionality"?: 2 | 3 | null | undefined;
    "segmentation_image"?: InputPathType | null | undefined;
    "gray_matter_probability_image"?: InputPathType | null | undefined;
    "white_matter_probability_image"?: InputPathType | null | undefined;
    "convergence"?: string | null | undefined;
    "thickness_prior_estimate"?: number | null | undefined;
    "thickness_prior_image"?: InputPathType | null | undefined;
    "gradient_step"?: number | null | undefined;
    "smoothing_variance"?: number | null | undefined;
    "smoothing_velocity_field_parameter"?: string | null | undefined;
    "use_bspline_smoothing"?: 0 | 1 | null | undefined;
    "use_masked_smoothing"?: 0 | 1 | null | undefined;
    "time_points"?: string | null | undefined;
    "restrict_deformation"?: 0 | 1 | null | undefined;
    "number_of_integration_points"?: number | null | undefined;
    "maximum_number_of_invert_displacement_field_iterations"?: number | null | undefined;
    "output": string;
    "verbose"?: 0 | 1 | null | undefined;
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
        "KellyKapowski": kelly_kapowski_cargs,
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
        "KellyKapowski": kelly_kapowski_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `kelly_kapowski(...)`.
 *
 * @interface
 */
interface KellyKapowskiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output is the thickness map defined in the segmented gray matter.
     */
    thickness_map: OutputPathType;
}


function kelly_kapowski_params(
    output: string,
    image_dimensionality: 2 | 3 | null = null,
    segmentation_image: InputPathType | null = null,
    gray_matter_probability_image: InputPathType | null = null,
    white_matter_probability_image: InputPathType | null = null,
    convergence: string | null = null,
    thickness_prior_estimate: number | null = null,
    thickness_prior_image: InputPathType | null = null,
    gradient_step: number | null = null,
    smoothing_variance: number | null = null,
    smoothing_velocity_field_parameter: string | null = null,
    use_bspline_smoothing: 0 | 1 | null = null,
    use_masked_smoothing: 0 | 1 | null = null,
    time_points: string | null = null,
    restrict_deformation: 0 | 1 | null = null,
    number_of_integration_points: number | null = null,
    maximum_number_of_invert_displacement_field_iterations: number | null = null,
    verbose: 0 | 1 | null = null,
): KellyKapowskiParameters {
    /**
     * Build parameters.
    
     * @param output The output consists of a thickness map defined in the segmented gray matter.
     * @param image_dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, DiReCT tries to infer the dimensionality from the input image.
     * @param segmentation_image A segmentation image must be supplied labeling the gray and white matters. Default values = 2 and 3, respectively.
     * @param gray_matter_probability_image In addition to the segmentation image, a gray matter probability image can be used. If no such image is supplied, one is created using the segmentation image and a variance of 1.0 mm.
     * @param white_matter_probability_image In addition to the segmentation image, a white matter probability image can be used. If no such image is supplied, one is created using the segmentation image and a variance of 1.0 mm.
     * @param convergence Convergence is determined by fitting a line to the normalized energy profile of the last N iterations (where N is specified by the window size) and determining the slope which is then compared with the convergence threshold.
     * @param thickness_prior_estimate Provides a prior constraint on the final thickness measurement. Default = 10 mm.
     * @param thickness_prior_image An image containing spatially varying prior thickness values.
     * @param gradient_step Gradient step size for the optimization. Default = 0.025.
     * @param smoothing_variance Defines the Gaussian smoothing of the hit and total images. Default = 1.0 mm.
     * @param smoothing_velocity_field_parameter Defines the Gaussian smoothing of the velocity field (default = 1.5 voxels). If the b-spline smoothing option is chosen, then this defines the isotropic mesh spacing for the smoothing spline (default = 15 mm).
     * @param use_bspline_smoothing Sets the option for B-spline smoothing of the velocity field. Default = false.
     * @param use_masked_smoothing Sets the option for masked-based smoothing of the velocity field. Default = false.
     * @param time_points Time points for irregularly spaced time samples and time-variance with which to compute distance metric.
     * @param restrict_deformation Restrict the last dimension's deformation. Meant for use with multiple time points. Default = false.
     * @param number_of_integration_points Number of compositions of the diffeomorphism per iteration. Default = 10.
     * @param maximum_number_of_invert_displacement_field_iterations Maximum number of iterations for estimating the invert displacement field. Default = 20.
     * @param verbose Verbose output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "KellyKapowski" as const,
        "output": output,
    };
    if (image_dimensionality !== null) {
        params["image_dimensionality"] = image_dimensionality;
    }
    if (segmentation_image !== null) {
        params["segmentation_image"] = segmentation_image;
    }
    if (gray_matter_probability_image !== null) {
        params["gray_matter_probability_image"] = gray_matter_probability_image;
    }
    if (white_matter_probability_image !== null) {
        params["white_matter_probability_image"] = white_matter_probability_image;
    }
    if (convergence !== null) {
        params["convergence"] = convergence;
    }
    if (thickness_prior_estimate !== null) {
        params["thickness_prior_estimate"] = thickness_prior_estimate;
    }
    if (thickness_prior_image !== null) {
        params["thickness_prior_image"] = thickness_prior_image;
    }
    if (gradient_step !== null) {
        params["gradient_step"] = gradient_step;
    }
    if (smoothing_variance !== null) {
        params["smoothing_variance"] = smoothing_variance;
    }
    if (smoothing_velocity_field_parameter !== null) {
        params["smoothing_velocity_field_parameter"] = smoothing_velocity_field_parameter;
    }
    if (use_bspline_smoothing !== null) {
        params["use_bspline_smoothing"] = use_bspline_smoothing;
    }
    if (use_masked_smoothing !== null) {
        params["use_masked_smoothing"] = use_masked_smoothing;
    }
    if (time_points !== null) {
        params["time_points"] = time_points;
    }
    if (restrict_deformation !== null) {
        params["restrict_deformation"] = restrict_deformation;
    }
    if (number_of_integration_points !== null) {
        params["number_of_integration_points"] = number_of_integration_points;
    }
    if (maximum_number_of_invert_displacement_field_iterations !== null) {
        params["maximum_number_of_invert_displacement_field_iterations"] = maximum_number_of_invert_displacement_field_iterations;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    return params;
}


function kelly_kapowski_cargs(
    params: KellyKapowskiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("KellyKapowski");
    if ((params["image_dimensionality"] ?? null) !== null) {
        cargs.push(
            "--image-dimensionality",
            String((params["image_dimensionality"] ?? null))
        );
    }
    if ((params["segmentation_image"] ?? null) !== null) {
        cargs.push(
            "--segmentation-image",
            execution.inputFile((params["segmentation_image"] ?? null))
        );
    }
    if ((params["gray_matter_probability_image"] ?? null) !== null) {
        cargs.push(
            "--gray-matter-probability-image",
            execution.inputFile((params["gray_matter_probability_image"] ?? null))
        );
    }
    if ((params["white_matter_probability_image"] ?? null) !== null) {
        cargs.push(
            "--white-matter-probability-image",
            execution.inputFile((params["white_matter_probability_image"] ?? null))
        );
    }
    if ((params["convergence"] ?? null) !== null) {
        cargs.push(
            "--convergence",
            (params["convergence"] ?? null)
        );
    }
    if ((params["thickness_prior_estimate"] ?? null) !== null) {
        cargs.push(
            "--thickness-prior-estimate",
            String((params["thickness_prior_estimate"] ?? null))
        );
    }
    if ((params["thickness_prior_image"] ?? null) !== null) {
        cargs.push(
            "--thickness-prior-image",
            execution.inputFile((params["thickness_prior_image"] ?? null))
        );
    }
    if ((params["gradient_step"] ?? null) !== null) {
        cargs.push(
            "--gradient-step",
            String((params["gradient_step"] ?? null))
        );
    }
    if ((params["smoothing_variance"] ?? null) !== null) {
        cargs.push(
            "--smoothing-variance",
            String((params["smoothing_variance"] ?? null))
        );
    }
    if ((params["smoothing_velocity_field_parameter"] ?? null) !== null) {
        cargs.push(
            "--smoothing-velocity-field-parameter",
            (params["smoothing_velocity_field_parameter"] ?? null)
        );
    }
    if ((params["use_bspline_smoothing"] ?? null) !== null) {
        cargs.push(
            "--use-bspline-smoothing",
            String((params["use_bspline_smoothing"] ?? null))
        );
    }
    if ((params["use_masked_smoothing"] ?? null) !== null) {
        cargs.push(
            "--use-masked-smoothing",
            String((params["use_masked_smoothing"] ?? null))
        );
    }
    if ((params["time_points"] ?? null) !== null) {
        cargs.push(
            "--time-points",
            (params["time_points"] ?? null)
        );
    }
    if ((params["restrict_deformation"] ?? null) !== null) {
        cargs.push(
            "--restrict-deformation",
            String((params["restrict_deformation"] ?? null))
        );
    }
    if ((params["number_of_integration_points"] ?? null) !== null) {
        cargs.push(
            "--number-of-integration-points",
            String((params["number_of_integration_points"] ?? null))
        );
    }
    if ((params["maximum_number_of_invert_displacement_field_iterations"] ?? null) !== null) {
        cargs.push(
            "--maximum-number-of-invert-displacement-field-iterations",
            String((params["maximum_number_of_invert_displacement_field_iterations"] ?? null))
        );
    }
    cargs.push(
        "--output",
        (params["output"] ?? null)
    );
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "--verbose",
            String((params["verbose"] ?? null))
        );
    }
    return cargs;
}


function kelly_kapowski_outputs(
    params: KellyKapowskiParameters,
    execution: Execution,
): KellyKapowskiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: KellyKapowskiOutputs = {
        root: execution.outputFile("."),
        thickness_map: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function kelly_kapowski_execute(
    params: KellyKapowskiParameters,
    execution: Execution,
): KellyKapowskiOutputs {
    /**
     * DiReCT is a registration based estimate of cortical thickness. It was published in S. R. Das, B. B. Avants, M. Grossman, and J. C. Gee, Registration based cortical thickness measurement, Neuroimage 2009, 45:867--879.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `KellyKapowskiOutputs`).
     */
    params = execution.params(params)
    const cargs = kelly_kapowski_cargs(params, execution)
    const ret = kelly_kapowski_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function kelly_kapowski(
    output: string,
    image_dimensionality: 2 | 3 | null = null,
    segmentation_image: InputPathType | null = null,
    gray_matter_probability_image: InputPathType | null = null,
    white_matter_probability_image: InputPathType | null = null,
    convergence: string | null = null,
    thickness_prior_estimate: number | null = null,
    thickness_prior_image: InputPathType | null = null,
    gradient_step: number | null = null,
    smoothing_variance: number | null = null,
    smoothing_velocity_field_parameter: string | null = null,
    use_bspline_smoothing: 0 | 1 | null = null,
    use_masked_smoothing: 0 | 1 | null = null,
    time_points: string | null = null,
    restrict_deformation: 0 | 1 | null = null,
    number_of_integration_points: number | null = null,
    maximum_number_of_invert_displacement_field_iterations: number | null = null,
    verbose: 0 | 1 | null = null,
    runner: Runner | null = null,
): KellyKapowskiOutputs {
    /**
     * DiReCT is a registration based estimate of cortical thickness. It was published in S. R. Das, B. B. Avants, M. Grossman, and J. C. Gee, Registration based cortical thickness measurement, Neuroimage 2009, 45:867--879.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param output The output consists of a thickness map defined in the segmented gray matter.
     * @param image_dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, DiReCT tries to infer the dimensionality from the input image.
     * @param segmentation_image A segmentation image must be supplied labeling the gray and white matters. Default values = 2 and 3, respectively.
     * @param gray_matter_probability_image In addition to the segmentation image, a gray matter probability image can be used. If no such image is supplied, one is created using the segmentation image and a variance of 1.0 mm.
     * @param white_matter_probability_image In addition to the segmentation image, a white matter probability image can be used. If no such image is supplied, one is created using the segmentation image and a variance of 1.0 mm.
     * @param convergence Convergence is determined by fitting a line to the normalized energy profile of the last N iterations (where N is specified by the window size) and determining the slope which is then compared with the convergence threshold.
     * @param thickness_prior_estimate Provides a prior constraint on the final thickness measurement. Default = 10 mm.
     * @param thickness_prior_image An image containing spatially varying prior thickness values.
     * @param gradient_step Gradient step size for the optimization. Default = 0.025.
     * @param smoothing_variance Defines the Gaussian smoothing of the hit and total images. Default = 1.0 mm.
     * @param smoothing_velocity_field_parameter Defines the Gaussian smoothing of the velocity field (default = 1.5 voxels). If the b-spline smoothing option is chosen, then this defines the isotropic mesh spacing for the smoothing spline (default = 15 mm).
     * @param use_bspline_smoothing Sets the option for B-spline smoothing of the velocity field. Default = false.
     * @param use_masked_smoothing Sets the option for masked-based smoothing of the velocity field. Default = false.
     * @param time_points Time points for irregularly spaced time samples and time-variance with which to compute distance metric.
     * @param restrict_deformation Restrict the last dimension's deformation. Meant for use with multiple time points. Default = false.
     * @param number_of_integration_points Number of compositions of the diffeomorphism per iteration. Default = 10.
     * @param maximum_number_of_invert_displacement_field_iterations Maximum number of iterations for estimating the invert displacement field. Default = 20.
     * @param verbose Verbose output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `KellyKapowskiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(KELLY_KAPOWSKI_METADATA);
    const params = kelly_kapowski_params(output, image_dimensionality, segmentation_image, gray_matter_probability_image, white_matter_probability_image, convergence, thickness_prior_estimate, thickness_prior_image, gradient_step, smoothing_variance, smoothing_velocity_field_parameter, use_bspline_smoothing, use_masked_smoothing, time_points, restrict_deformation, number_of_integration_points, maximum_number_of_invert_displacement_field_iterations, verbose)
    return kelly_kapowski_execute(params, execution);
}


export {
      KELLY_KAPOWSKI_METADATA,
      KellyKapowskiOutputs,
      KellyKapowskiParameters,
      kelly_kapowski,
      kelly_kapowski_params,
};
