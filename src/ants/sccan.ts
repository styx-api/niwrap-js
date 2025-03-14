// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SCCAN_METADATA: Metadata = {
    id: "26f604003de4aee5a1d0df471af2893515e5b091.boutiques",
    name: "sccan",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface SccanParameters {
    "__STYXTYPE__": "sccan";
    "output"?: string | null | undefined;
    "n_permutations"?: number | null | undefined;
    "smoother"?: number | null | undefined;
    "row_sparseness"?: number | null | undefined;
    "iterations"?: number | null | undefined;
    "n_eigenvectors"?: number | null | undefined;
    "robustify"?: number | null | undefined;
    "covering"?: number | null | undefined;
    "uselong"?: number | null | undefined;
    "l1"?: number | null | undefined;
    "pclusterthresh"?: number | null | undefined;
    "qclusterthresh"?: number | null | undefined;
    "ridge_cca"?: number | null | undefined;
    "initialization"?: string | null | undefined;
    "initialization2"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "mask2"?: InputPathType | null | undefined;
    "partial_scca_option"?: string | null | undefined;
    "prior_weight"?: number | null | undefined;
    "get_small"?: number | null | undefined;
    "verbose"?: number | null | undefined;
    "imageset_to_matrix"?: string | null | undefined;
    "timeseriesimage_to_matrix"?: string | null | undefined;
    "vector_to_image"?: string | null | undefined;
    "imageset_to_projections"?: string | null | undefined;
    "scca"?: string | null | undefined;
    "svd"?: string | null | undefined;
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
        "sccan": sccan_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `sccan(...)`.
 *
 * @interface
 */
interface SccanOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function sccan_params(
    output: string | null = null,
    n_permutations: number | null = null,
    smoother: number | null = null,
    row_sparseness: number | null = null,
    iterations: number | null = null,
    n_eigenvectors: number | null = null,
    robustify: number | null = null,
    covering: number | null = null,
    uselong: number | null = null,
    l1: number | null = null,
    pclusterthresh: number | null = null,
    qclusterthresh: number | null = null,
    ridge_cca: number | null = null,
    initialization: string | null = null,
    initialization2: string | null = null,
    mask: InputPathType | null = null,
    mask2: InputPathType | null = null,
    partial_scca_option: string | null = null,
    prior_weight: number | null = null,
    get_small: number | null = null,
    verbose: number | null = null,
    imageset_to_matrix: string | null = null,
    timeseriesimage_to_matrix: string | null = null,
    vector_to_image: string | null = null,
    imageset_to_projections: string | null = null,
    scca: string | null = null,
    svd: string | null = null,
): SccanParameters {
    /**
     * Build parameters.
    
     * @param output Output dependent on which option is called.
     * @param n_permutations Number of permutations to use in scca.
     * @param smoother Smoothing function for variates.
     * @param row_sparseness Row sparseness - if (+) then keep values (+) otherwise allow +/- values --- always L1.
     * @param iterations Max iterations for scca optimization (min 20).
     * @param n_eigenvectors Number of eigenvectors to compute in scca/spca.
     * @param robustify Rank-based scca.
     * @param covering Try to make the decomposition cover the whole domain, if possible.
     * @param uselong Use longitudinal formulation (> 0) or not (<= 0).
     * @param l1 Use l1 (> 0) or l0 (< 0) penalty, also sets gradient step size.
     * @param pclusterthresh Cluster threshold on view P.
     * @param qclusterthresh Cluster threshold on view Q.
     * @param ridge_cca Ridge cca.
     * @param initialization Initialization file list for Eigenanatomy - must also pass mask option.
     * @param initialization2 Initialization file list for SCCAN-Eigenanatomy - must also pass mask option.
     * @param mask Mask file for Eigenanatomy initialization.
     * @param mask2 Mask file for Eigenanatomy initialization 2.
     * @param partial_scca_option Choices for pscca: PQ, PminusRQ, PQminusR, PminusRQminusR.
     * @param prior_weight Scalar value weight on prior between 0 (prior is weak) and 1 (prior is strong). Only engaged if initialization is used.
     * @param get_small Find smallest eigenvectors.
     * @param verbose Set whether output is verbose.
     * @param imageset_to_matrix Takes a list of image files names (one per line) and converts it to a 2D matrix/image in binary or csv format.
     * @param timeseriesimage_to_matrix Takes a timeseries (4D) image and converts it to a 2D matrix csv format.
     * @param vector_to_image Converts the 1st column vector in a csv file back to an image.
     * @param imageset_to_projections Takes a list of image and projection files names and writes them to a csv file.
     * @param scca Matrix-based scca operations for 2 and 3 views.
     * @param svd A sparse SVD implementation.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "sccan" as const,
    };
    if (output !== null) {
        params["output"] = output;
    }
    if (n_permutations !== null) {
        params["n_permutations"] = n_permutations;
    }
    if (smoother !== null) {
        params["smoother"] = smoother;
    }
    if (row_sparseness !== null) {
        params["row_sparseness"] = row_sparseness;
    }
    if (iterations !== null) {
        params["iterations"] = iterations;
    }
    if (n_eigenvectors !== null) {
        params["n_eigenvectors"] = n_eigenvectors;
    }
    if (robustify !== null) {
        params["robustify"] = robustify;
    }
    if (covering !== null) {
        params["covering"] = covering;
    }
    if (uselong !== null) {
        params["uselong"] = uselong;
    }
    if (l1 !== null) {
        params["l1"] = l1;
    }
    if (pclusterthresh !== null) {
        params["pclusterthresh"] = pclusterthresh;
    }
    if (qclusterthresh !== null) {
        params["qclusterthresh"] = qclusterthresh;
    }
    if (ridge_cca !== null) {
        params["ridge_cca"] = ridge_cca;
    }
    if (initialization !== null) {
        params["initialization"] = initialization;
    }
    if (initialization2 !== null) {
        params["initialization2"] = initialization2;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mask2 !== null) {
        params["mask2"] = mask2;
    }
    if (partial_scca_option !== null) {
        params["partial_scca_option"] = partial_scca_option;
    }
    if (prior_weight !== null) {
        params["prior_weight"] = prior_weight;
    }
    if (get_small !== null) {
        params["get_small"] = get_small;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    if (imageset_to_matrix !== null) {
        params["imageset_to_matrix"] = imageset_to_matrix;
    }
    if (timeseriesimage_to_matrix !== null) {
        params["timeseriesimage_to_matrix"] = timeseriesimage_to_matrix;
    }
    if (vector_to_image !== null) {
        params["vector_to_image"] = vector_to_image;
    }
    if (imageset_to_projections !== null) {
        params["imageset_to_projections"] = imageset_to_projections;
    }
    if (scca !== null) {
        params["scca"] = scca;
    }
    if (svd !== null) {
        params["svd"] = svd;
    }
    return params;
}


function sccan_cargs(
    params: SccanParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("sccan");
    if ((params["output"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output"] ?? null)
        );
    }
    if ((params["n_permutations"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["n_permutations"] ?? null))
        );
    }
    if ((params["smoother"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["smoother"] ?? null))
        );
    }
    if ((params["row_sparseness"] ?? null) !== null) {
        cargs.push(
            "-z",
            String((params["row_sparseness"] ?? null))
        );
    }
    if ((params["iterations"] ?? null) !== null) {
        cargs.push(
            "-i",
            String((params["iterations"] ?? null))
        );
    }
    if ((params["n_eigenvectors"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["n_eigenvectors"] ?? null))
        );
    }
    if ((params["robustify"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["robustify"] ?? null))
        );
    }
    if ((params["covering"] ?? null) !== null) {
        cargs.push(
            "-c",
            String((params["covering"] ?? null))
        );
    }
    if ((params["uselong"] ?? null) !== null) {
        cargs.push(
            "-g",
            String((params["uselong"] ?? null))
        );
    }
    if ((params["l1"] ?? null) !== null) {
        cargs.push(
            "-l",
            String((params["l1"] ?? null))
        );
    }
    if ((params["pclusterthresh"] ?? null) !== null) {
        cargs.push(
            "--PClusterThresh",
            String((params["pclusterthresh"] ?? null))
        );
    }
    if ((params["qclusterthresh"] ?? null) !== null) {
        cargs.push(
            "--QClusterThresh",
            String((params["qclusterthresh"] ?? null))
        );
    }
    if ((params["ridge_cca"] ?? null) !== null) {
        cargs.push(
            "-e",
            String((params["ridge_cca"] ?? null))
        );
    }
    if ((params["initialization"] ?? null) !== null) {
        cargs.push(
            "--initialization",
            (params["initialization"] ?? null)
        );
    }
    if ((params["initialization2"] ?? null) !== null) {
        cargs.push(
            "--initialization2",
            (params["initialization2"] ?? null)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["mask2"] ?? null) !== null) {
        cargs.push(
            "--mask2",
            execution.inputFile((params["mask2"] ?? null))
        );
    }
    if ((params["partial_scca_option"] ?? null) !== null) {
        cargs.push(
            "--partial-scca-option",
            (params["partial_scca_option"] ?? null)
        );
    }
    if ((params["prior_weight"] ?? null) !== null) {
        cargs.push(
            "--prior-weight",
            String((params["prior_weight"] ?? null))
        );
    }
    if ((params["get_small"] ?? null) !== null) {
        cargs.push(
            "--get-small",
            String((params["get_small"] ?? null))
        );
    }
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "-v",
            String((params["verbose"] ?? null))
        );
    }
    if ((params["imageset_to_matrix"] ?? null) !== null) {
        cargs.push(
            "--imageset-to-matrix",
            (params["imageset_to_matrix"] ?? null)
        );
    }
    if ((params["timeseriesimage_to_matrix"] ?? null) !== null) {
        cargs.push(
            "--timeseriesimage-to-matrix",
            (params["timeseriesimage_to_matrix"] ?? null)
        );
    }
    if ((params["vector_to_image"] ?? null) !== null) {
        cargs.push(
            "--vector-to-image",
            (params["vector_to_image"] ?? null)
        );
    }
    if ((params["imageset_to_projections"] ?? null) !== null) {
        cargs.push(
            "--imageset-to-projections",
            (params["imageset_to_projections"] ?? null)
        );
    }
    if ((params["scca"] ?? null) !== null) {
        cargs.push(
            "--scca",
            (params["scca"] ?? null)
        );
    }
    if ((params["svd"] ?? null) !== null) {
        cargs.push(
            "--svd",
            (params["svd"] ?? null)
        );
    }
    return cargs;
}


function sccan_outputs(
    params: SccanParameters,
    execution: Execution,
): SccanOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SccanOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function sccan_execute(
    params: SccanParameters,
    execution: Execution,
): SccanOutputs {
    /**
     * A tool for sparse statistical analysis on images : scca, pscca (with options), mscca. Can also convert an imagelist/mask pair to a binary matrix image.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SccanOutputs`).
     */
    params = execution.params(params)
    const cargs = sccan_cargs(params, execution)
    const ret = sccan_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function sccan(
    output: string | null = null,
    n_permutations: number | null = null,
    smoother: number | null = null,
    row_sparseness: number | null = null,
    iterations: number | null = null,
    n_eigenvectors: number | null = null,
    robustify: number | null = null,
    covering: number | null = null,
    uselong: number | null = null,
    l1: number | null = null,
    pclusterthresh: number | null = null,
    qclusterthresh: number | null = null,
    ridge_cca: number | null = null,
    initialization: string | null = null,
    initialization2: string | null = null,
    mask: InputPathType | null = null,
    mask2: InputPathType | null = null,
    partial_scca_option: string | null = null,
    prior_weight: number | null = null,
    get_small: number | null = null,
    verbose: number | null = null,
    imageset_to_matrix: string | null = null,
    timeseriesimage_to_matrix: string | null = null,
    vector_to_image: string | null = null,
    imageset_to_projections: string | null = null,
    scca: string | null = null,
    svd: string | null = null,
    runner: Runner | null = null,
): SccanOutputs {
    /**
     * A tool for sparse statistical analysis on images : scca, pscca (with options), mscca. Can also convert an imagelist/mask pair to a binary matrix image.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param output Output dependent on which option is called.
     * @param n_permutations Number of permutations to use in scca.
     * @param smoother Smoothing function for variates.
     * @param row_sparseness Row sparseness - if (+) then keep values (+) otherwise allow +/- values --- always L1.
     * @param iterations Max iterations for scca optimization (min 20).
     * @param n_eigenvectors Number of eigenvectors to compute in scca/spca.
     * @param robustify Rank-based scca.
     * @param covering Try to make the decomposition cover the whole domain, if possible.
     * @param uselong Use longitudinal formulation (> 0) or not (<= 0).
     * @param l1 Use l1 (> 0) or l0 (< 0) penalty, also sets gradient step size.
     * @param pclusterthresh Cluster threshold on view P.
     * @param qclusterthresh Cluster threshold on view Q.
     * @param ridge_cca Ridge cca.
     * @param initialization Initialization file list for Eigenanatomy - must also pass mask option.
     * @param initialization2 Initialization file list for SCCAN-Eigenanatomy - must also pass mask option.
     * @param mask Mask file for Eigenanatomy initialization.
     * @param mask2 Mask file for Eigenanatomy initialization 2.
     * @param partial_scca_option Choices for pscca: PQ, PminusRQ, PQminusR, PminusRQminusR.
     * @param prior_weight Scalar value weight on prior between 0 (prior is weak) and 1 (prior is strong). Only engaged if initialization is used.
     * @param get_small Find smallest eigenvectors.
     * @param verbose Set whether output is verbose.
     * @param imageset_to_matrix Takes a list of image files names (one per line) and converts it to a 2D matrix/image in binary or csv format.
     * @param timeseriesimage_to_matrix Takes a timeseries (4D) image and converts it to a 2D matrix csv format.
     * @param vector_to_image Converts the 1st column vector in a csv file back to an image.
     * @param imageset_to_projections Takes a list of image and projection files names and writes them to a csv file.
     * @param scca Matrix-based scca operations for 2 and 3 views.
     * @param svd A sparse SVD implementation.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SccanOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SCCAN_METADATA);
    const params = sccan_params(output, n_permutations, smoother, row_sparseness, iterations, n_eigenvectors, robustify, covering, uselong, l1, pclusterthresh, qclusterthresh, ridge_cca, initialization, initialization2, mask, mask2, partial_scca_option, prior_weight, get_small, verbose, imageset_to_matrix, timeseriesimage_to_matrix, vector_to_image, imageset_to_projections, scca, svd)
    return sccan_execute(params, execution);
}


export {
      SCCAN_METADATA,
      SccanOutputs,
      SccanParameters,
      sccan,
      sccan_params,
};
