// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ATROPOS_METADATA: Metadata = {
    id: "4cb469cdce62fc57298fef68a491750d55ea4517.boutiques",
    name: "Atropos",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AtroposParameters {
    "__STYXTYPE__": "Atropos";
    "image_dimensionality"?: 2 | 3 | 4 | null | undefined;
    "intensity_image": string;
    "bspline"?: string | null | undefined;
    "initialization": string;
    "partial_volume_label_set"?: string | null | undefined;
    "use_partial_volume_likelihoods"?: 0 | 1 | null | undefined;
    "posterior_formulation"?: string | null | undefined;
    "mask_image": InputPathType;
    "convergence": string;
    "likelihood_model": string;
    "mrf"?: string | null | undefined;
    "icm"?: string | null | undefined;
    "use_random_seed"?: 0 | 1 | null | undefined;
    "output": string;
    "minimize_memory_usage"?: 0 | 1 | null | undefined;
    "winsorize_outliers"?: string | null | undefined;
    "use_euclidean_distance"?: 0 | 1 | null | undefined;
    "label_propagation"?: string | null | undefined;
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
        "Atropos": atropos_cargs,
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
        "Atropos": atropos_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `atropos(...)`.
 *
 * @interface
 */
interface AtroposOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output labeled image with assigned labels for each voxel in the masked region.
     */
    classified_image: OutputPathType;
    /**
     * Output posterior probability images in specified format.
     */
    posterior_probability_images: OutputPathType;
}


function atropos_params(
    intensity_image: string,
    initialization: string,
    mask_image: InputPathType,
    convergence: string,
    likelihood_model: string,
    output: string,
    image_dimensionality: 2 | 3 | 4 | null = null,
    bspline: string | null = null,
    partial_volume_label_set: string | null = null,
    use_partial_volume_likelihoods: 0 | 1 | null = null,
    posterior_formulation: string | null = null,
    mrf: string | null = null,
    icm: string | null = null,
    use_random_seed: 0 | 1 | null = null,
    minimize_memory_usage: 0 | 1 | null = null,
    winsorize_outliers: string | null = null,
    use_euclidean_distance: 0 | 1 | null = null,
    label_propagation: string | null = null,
    verbose: 0 | 1 | null = null,
): AtroposParameters {
    /**
     * Build parameters.
    
     * @param intensity_image One or more scalar images is specified for segmentation. For scenarios with no prior information, the first scalar image is used to order labelings by intensity. The optional adaptive smoothing weight is applicable with prior images, specified between [0,1].
     * @param initialization Initialize the FMM parameters. options include Random, Otsu, KMeans, PriorProbabilityImages, and PriorLabelImage.
     * @param mask_image The required image mask defines the region to be labeled by Atropos.
     * @param convergence Determine convergence based on mean maximum posterior probability over region of interest.
     * @param likelihood_model Specify parametric or non-parametric likelihood model. Options include Gaussian, HistogramParzenWindows, ManifoldParzenWindows, among others.
     * @param output Output labeled image and optionally posterior probability images.
     * @param image_dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, Atropos tries to infer the dimensionality from the first input image.
     * @param bspline Parameters for B-Spline. Adaptive smoothing is applied to intensity images if smoothing weights > 0.
     * @param partial_volume_label_set Model mixtures of classes within single voxels. Specify labels for each partial volume class.
     * @param use_partial_volume_likelihoods Whether to use partial volume likelihoods. A value of 1 considers the partial volume class separate from tissue classes.
     * @param posterior_formulation Specify posterior probability formulation. Options are Socrates, Plato, Aristotle, or Sigmoid.
     * @param mrf Markov Random Field parameters to enforce spatial constraints on segmentation.
     * @param icm ICM (Iterated Conditional Modes) parameters for asynchronous updating.
     * @param use_random_seed Initialize with a random seed or a constant seed number.
     * @param minimize_memory_usage Minimize memory usage by calculating images on the fly and storing only non-negligible pixel values.
     * @param winsorize_outliers Options to remove effects of outliers in calculations using methods like BoxPlot or GrubbsRosner.
     * @param use_euclidean_distance Propagate labels throughout the mask using a distance transform.
     * @param label_propagation Control propagation of each prior label by specified lambda and boundary probability.
     * @param verbose Verbose output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "Atropos" as const,
        "intensity_image": intensity_image,
        "initialization": initialization,
        "mask_image": mask_image,
        "convergence": convergence,
        "likelihood_model": likelihood_model,
        "output": output,
    };
    if (image_dimensionality !== null) {
        params["image_dimensionality"] = image_dimensionality;
    }
    if (bspline !== null) {
        params["bspline"] = bspline;
    }
    if (partial_volume_label_set !== null) {
        params["partial_volume_label_set"] = partial_volume_label_set;
    }
    if (use_partial_volume_likelihoods !== null) {
        params["use_partial_volume_likelihoods"] = use_partial_volume_likelihoods;
    }
    if (posterior_formulation !== null) {
        params["posterior_formulation"] = posterior_formulation;
    }
    if (mrf !== null) {
        params["mrf"] = mrf;
    }
    if (icm !== null) {
        params["icm"] = icm;
    }
    if (use_random_seed !== null) {
        params["use_random_seed"] = use_random_seed;
    }
    if (minimize_memory_usage !== null) {
        params["minimize_memory_usage"] = minimize_memory_usage;
    }
    if (winsorize_outliers !== null) {
        params["winsorize_outliers"] = winsorize_outliers;
    }
    if (use_euclidean_distance !== null) {
        params["use_euclidean_distance"] = use_euclidean_distance;
    }
    if (label_propagation !== null) {
        params["label_propagation"] = label_propagation;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    return params;
}


function atropos_cargs(
    params: AtroposParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("Atropos");
    if ((params["image_dimensionality"] ?? null) !== null) {
        cargs.push(
            "--image-dimensionality",
            String((params["image_dimensionality"] ?? null))
        );
    }
    cargs.push(
        "-a",
        (params["intensity_image"] ?? null)
    );
    if ((params["bspline"] ?? null) !== null) {
        cargs.push(
            "-b",
            (params["bspline"] ?? null)
        );
    }
    cargs.push(
        "-i",
        (params["initialization"] ?? null)
    );
    if ((params["partial_volume_label_set"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["partial_volume_label_set"] ?? null)
        );
    }
    if ((params["use_partial_volume_likelihoods"] ?? null) !== null) {
        cargs.push(
            "--use-partial-volume-likelihoods",
            String((params["use_partial_volume_likelihoods"] ?? null))
        );
    }
    if ((params["posterior_formulation"] ?? null) !== null) {
        cargs.push(
            "-p",
            (params["posterior_formulation"] ?? null)
        );
    }
    cargs.push(
        "-x",
        execution.inputFile((params["mask_image"] ?? null))
    );
    cargs.push(
        "-c",
        (params["convergence"] ?? null)
    );
    cargs.push(
        "-k",
        (params["likelihood_model"] ?? null)
    );
    if ((params["mrf"] ?? null) !== null) {
        cargs.push(
            "-m",
            (params["mrf"] ?? null)
        );
    }
    if ((params["icm"] ?? null) !== null) {
        cargs.push(
            "-g",
            (params["icm"] ?? null)
        );
    }
    if ((params["use_random_seed"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["use_random_seed"] ?? null))
        );
    }
    cargs.push(
        "-o",
        (params["output"] ?? null)
    );
    if ((params["minimize_memory_usage"] ?? null) !== null) {
        cargs.push(
            "-u",
            String((params["minimize_memory_usage"] ?? null))
        );
    }
    if ((params["winsorize_outliers"] ?? null) !== null) {
        cargs.push(
            "-w",
            (params["winsorize_outliers"] ?? null)
        );
    }
    if ((params["use_euclidean_distance"] ?? null) !== null) {
        cargs.push(
            "-e",
            String((params["use_euclidean_distance"] ?? null))
        );
    }
    if ((params["label_propagation"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["label_propagation"] ?? null)
        );
    }
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "-v",
            String((params["verbose"] ?? null))
        );
    }
    return cargs;
}


function atropos_outputs(
    params: AtroposParameters,
    execution: Execution,
): AtroposOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AtroposOutputs = {
        root: execution.outputFile("."),
        classified_image: execution.outputFile([(params["output"] ?? null), "_classified.nii.gz"].join('')),
        posterior_probability_images: execution.outputFile(["[POSTERIOR_PROBABILITY_IMAGE_FILE_NAME_FORMAT]"].join('')),
    };
    return ret;
}


function atropos_execute(
    params: AtroposParameters,
    execution: Execution,
): AtroposOutputs {
    /**
     * Atropos is a finite mixture modeling (FMM) segmentation approach that allows for prior constraints including a prior label image, prior probability images, and/or an MRF prior to enforce spatial smoothing of the labels.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AtroposOutputs`).
     */
    params = execution.params(params)
    const cargs = atropos_cargs(params, execution)
    const ret = atropos_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function atropos(
    intensity_image: string,
    initialization: string,
    mask_image: InputPathType,
    convergence: string,
    likelihood_model: string,
    output: string,
    image_dimensionality: 2 | 3 | 4 | null = null,
    bspline: string | null = null,
    partial_volume_label_set: string | null = null,
    use_partial_volume_likelihoods: 0 | 1 | null = null,
    posterior_formulation: string | null = null,
    mrf: string | null = null,
    icm: string | null = null,
    use_random_seed: 0 | 1 | null = null,
    minimize_memory_usage: 0 | 1 | null = null,
    winsorize_outliers: string | null = null,
    use_euclidean_distance: 0 | 1 | null = null,
    label_propagation: string | null = null,
    verbose: 0 | 1 | null = null,
    runner: Runner | null = null,
): AtroposOutputs {
    /**
     * Atropos is a finite mixture modeling (FMM) segmentation approach that allows for prior constraints including a prior label image, prior probability images, and/or an MRF prior to enforce spatial smoothing of the labels.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param intensity_image One or more scalar images is specified for segmentation. For scenarios with no prior information, the first scalar image is used to order labelings by intensity. The optional adaptive smoothing weight is applicable with prior images, specified between [0,1].
     * @param initialization Initialize the FMM parameters. options include Random, Otsu, KMeans, PriorProbabilityImages, and PriorLabelImage.
     * @param mask_image The required image mask defines the region to be labeled by Atropos.
     * @param convergence Determine convergence based on mean maximum posterior probability over region of interest.
     * @param likelihood_model Specify parametric or non-parametric likelihood model. Options include Gaussian, HistogramParzenWindows, ManifoldParzenWindows, among others.
     * @param output Output labeled image and optionally posterior probability images.
     * @param image_dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, Atropos tries to infer the dimensionality from the first input image.
     * @param bspline Parameters for B-Spline. Adaptive smoothing is applied to intensity images if smoothing weights > 0.
     * @param partial_volume_label_set Model mixtures of classes within single voxels. Specify labels for each partial volume class.
     * @param use_partial_volume_likelihoods Whether to use partial volume likelihoods. A value of 1 considers the partial volume class separate from tissue classes.
     * @param posterior_formulation Specify posterior probability formulation. Options are Socrates, Plato, Aristotle, or Sigmoid.
     * @param mrf Markov Random Field parameters to enforce spatial constraints on segmentation.
     * @param icm ICM (Iterated Conditional Modes) parameters for asynchronous updating.
     * @param use_random_seed Initialize with a random seed or a constant seed number.
     * @param minimize_memory_usage Minimize memory usage by calculating images on the fly and storing only non-negligible pixel values.
     * @param winsorize_outliers Options to remove effects of outliers in calculations using methods like BoxPlot or GrubbsRosner.
     * @param use_euclidean_distance Propagate labels throughout the mask using a distance transform.
     * @param label_propagation Control propagation of each prior label by specified lambda and boundary probability.
     * @param verbose Verbose output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AtroposOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ATROPOS_METADATA);
    const params = atropos_params(intensity_image, initialization, mask_image, convergence, likelihood_model, output, image_dimensionality, bspline, partial_volume_label_set, use_partial_volume_likelihoods, posterior_formulation, mrf, icm, use_random_seed, minimize_memory_usage, winsorize_outliers, use_euclidean_distance, label_propagation, verbose)
    return atropos_execute(params, execution);
}


export {
      ATROPOS_METADATA,
      AtroposOutputs,
      AtroposParameters,
      atropos,
      atropos_params,
};
