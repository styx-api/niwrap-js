// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONNECTOMESTATS_METADATA: Metadata = {
    id: "a535681290f66c0887d4200e46496cba897c8f9a.boutiques",
    name: "connectomestats",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface ConnectomestatsColumnParameters {
    "__STYXTYPE__": "column";
    "path": InputPathType;
}


interface ConnectomestatsConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface ConnectomestatsParameters {
    "__STYXTYPE__": "connectomestats";
    "notest": boolean;
    "errors"?: string | null | undefined;
    "exchange_within"?: InputPathType | null | undefined;
    "exchange_whole"?: InputPathType | null | undefined;
    "strong": boolean;
    "nshuffles"?: number | null | undefined;
    "permutations"?: InputPathType | null | undefined;
    "nonstationarity": boolean;
    "skew_nonstationarity"?: number | null | undefined;
    "nshuffles_nonstationarity"?: number | null | undefined;
    "permutations_nonstationarity"?: InputPathType | null | undefined;
    "tfce_dh"?: number | null | undefined;
    "tfce_e"?: number | null | undefined;
    "tfce_h"?: number | null | undefined;
    "variance"?: InputPathType | null | undefined;
    "ftests"?: InputPathType | null | undefined;
    "fonly": boolean;
    "column"?: Array<ConnectomestatsColumnParameters> | null | undefined;
    "threshold"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<ConnectomestatsConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
    "algorithm": string;
    "design": InputPathType;
    "contrast": InputPathType;
    "output": string;
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
        "connectomestats": connectomestats_cargs,
        "column": connectomestats_column_cargs,
        "config": connectomestats_config_cargs,
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


function connectomestats_column_params(
    path: InputPathType,
): ConnectomestatsColumnParameters {
    /**
     * Build parameters.
    
     * @param path add a column to the design matrix corresponding to subject edge-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "column" as const,
        "path": path,
    };
    return params;
}


function connectomestats_column_cargs(
    params: ConnectomestatsColumnParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-column");
    cargs.push(execution.inputFile((params["path"] ?? null)));
    return cargs;
}


function connectomestats_config_params(
    key: string,
    value: string,
): ConnectomestatsConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function connectomestats_config_cargs(
    params: ConnectomestatsConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `connectomestats(...)`.
 *
 * @interface
 */
interface ConnectomestatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function connectomestats_params(
    input: InputPathType,
    algorithm: string,
    design: InputPathType,
    contrast: InputPathType,
    output: string,
    notest: boolean = false,
    errors: string | null = null,
    exchange_within: InputPathType | null = null,
    exchange_whole: InputPathType | null = null,
    strong: boolean = false,
    nshuffles: number | null = null,
    permutations: InputPathType | null = null,
    nonstationarity: boolean = false,
    skew_nonstationarity: number | null = null,
    nshuffles_nonstationarity: number | null = null,
    permutations_nonstationarity: InputPathType | null = null,
    tfce_dh: number | null = null,
    tfce_e: number | null = null,
    tfce_h: number | null = null,
    variance: InputPathType | null = null,
    ftests: InputPathType | null = null,
    fonly: boolean = false,
    column: Array<ConnectomestatsColumnParameters> | null = null,
    threshold: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<ConnectomestatsConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): ConnectomestatsParameters {
    /**
     * Build parameters.
    
     * @param input a text file listing the file names of the input connectomes
     * @param algorithm the algorithm to use in network-based clustering/enhancement. Options are: nbs, tfnbs, none
     * @param design the design matrix
     * @param contrast the contrast matrix
     * @param output the filename prefix for all output.
     * @param notest don't perform statistical inference; only output population statistics (effect size, stdev etc)
     * @param errors specify nature of errors for shuffling; options are: ee,ise,both (default: ee)
     * @param exchange_within specify blocks of observations within each of which data may undergo restricted exchange
     * @param exchange_whole specify blocks of observations that may be exchanged with one another (for independent and symmetric errors, sign-flipping will occur block-wise)
     * @param strong use strong familywise error control across multiple hypotheses
     * @param nshuffles the number of shuffles (default: 5000)
     * @param permutations manually define the permutations (relabelling). The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM). Overrides the -nshuffles option.
     * @param nonstationarity perform non-stationarity correction
     * @param skew_nonstationarity specify the skew parameter for empirical statistic calculation (default for this command is 1)
     * @param nshuffles_nonstationarity the number of shuffles to use when precomputing the empirical statistic image for non-stationarity correction (default: 5000)
     * @param permutations_nonstationarity manually define the permutations (relabelling) for computing the emprical statistics for non-stationarity correction. The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM) Overrides the -nshuffles_nonstationarity option.
     * @param tfce_dh the height increment used in the tfce integration (default: 0.1)
     * @param tfce_e tfce extent exponent (default: 0.4)
     * @param tfce_h tfce height exponent (default: 3)
     * @param variance define variance groups for the G-statistic; measurements for which the expected variance is equivalent should contain the same index
     * @param ftests perform F-tests; input text file should contain, for each F-test, a row containing ones and zeros, where ones indicate the rows of the contrast matrix to be included in the F-test.
     * @param fonly only assess F-tests; do not perform statistical inference on entries in the contrast matrix
     * @param column add a column to the design matrix corresponding to subject edge-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
     * @param threshold the t-statistic value to use in threshold-based clustering algorithms
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "connectomestats" as const,
        "notest": notest,
        "strong": strong,
        "nonstationarity": nonstationarity,
        "fonly": fonly,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
        "algorithm": algorithm,
        "design": design,
        "contrast": contrast,
        "output": output,
    };
    if (errors !== null) {
        params["errors"] = errors;
    }
    if (exchange_within !== null) {
        params["exchange_within"] = exchange_within;
    }
    if (exchange_whole !== null) {
        params["exchange_whole"] = exchange_whole;
    }
    if (nshuffles !== null) {
        params["nshuffles"] = nshuffles;
    }
    if (permutations !== null) {
        params["permutations"] = permutations;
    }
    if (skew_nonstationarity !== null) {
        params["skew_nonstationarity"] = skew_nonstationarity;
    }
    if (nshuffles_nonstationarity !== null) {
        params["nshuffles_nonstationarity"] = nshuffles_nonstationarity;
    }
    if (permutations_nonstationarity !== null) {
        params["permutations_nonstationarity"] = permutations_nonstationarity;
    }
    if (tfce_dh !== null) {
        params["tfce_dh"] = tfce_dh;
    }
    if (tfce_e !== null) {
        params["tfce_e"] = tfce_e;
    }
    if (tfce_h !== null) {
        params["tfce_h"] = tfce_h;
    }
    if (variance !== null) {
        params["variance"] = variance;
    }
    if (ftests !== null) {
        params["ftests"] = ftests;
    }
    if (column !== null) {
        params["column"] = column;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function connectomestats_cargs(
    params: ConnectomestatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("connectomestats");
    if ((params["notest"] ?? null)) {
        cargs.push("-notest");
    }
    if ((params["errors"] ?? null) !== null) {
        cargs.push(
            "-errors",
            (params["errors"] ?? null)
        );
    }
    if ((params["exchange_within"] ?? null) !== null) {
        cargs.push(
            "-exchange_within",
            execution.inputFile((params["exchange_within"] ?? null))
        );
    }
    if ((params["exchange_whole"] ?? null) !== null) {
        cargs.push(
            "-exchange_whole",
            execution.inputFile((params["exchange_whole"] ?? null))
        );
    }
    if ((params["strong"] ?? null)) {
        cargs.push("-strong");
    }
    if ((params["nshuffles"] ?? null) !== null) {
        cargs.push(
            "-nshuffles",
            String((params["nshuffles"] ?? null))
        );
    }
    if ((params["permutations"] ?? null) !== null) {
        cargs.push(
            "-permutations",
            execution.inputFile((params["permutations"] ?? null))
        );
    }
    if ((params["nonstationarity"] ?? null)) {
        cargs.push("-nonstationarity");
    }
    if ((params["skew_nonstationarity"] ?? null) !== null) {
        cargs.push(
            "-skew_nonstationarity",
            String((params["skew_nonstationarity"] ?? null))
        );
    }
    if ((params["nshuffles_nonstationarity"] ?? null) !== null) {
        cargs.push(
            "-nshuffles_nonstationarity",
            String((params["nshuffles_nonstationarity"] ?? null))
        );
    }
    if ((params["permutations_nonstationarity"] ?? null) !== null) {
        cargs.push(
            "-permutations_nonstationarity",
            execution.inputFile((params["permutations_nonstationarity"] ?? null))
        );
    }
    if ((params["tfce_dh"] ?? null) !== null) {
        cargs.push(
            "-tfce_dh",
            String((params["tfce_dh"] ?? null))
        );
    }
    if ((params["tfce_e"] ?? null) !== null) {
        cargs.push(
            "-tfce_e",
            String((params["tfce_e"] ?? null))
        );
    }
    if ((params["tfce_h"] ?? null) !== null) {
        cargs.push(
            "-tfce_h",
            String((params["tfce_h"] ?? null))
        );
    }
    if ((params["variance"] ?? null) !== null) {
        cargs.push(
            "-variance",
            execution.inputFile((params["variance"] ?? null))
        );
    }
    if ((params["ftests"] ?? null) !== null) {
        cargs.push(
            "-ftests",
            execution.inputFile((params["ftests"] ?? null))
        );
    }
    if ((params["fonly"] ?? null)) {
        cargs.push("-fonly");
    }
    if ((params["column"] ?? null) !== null) {
        cargs.push(...(params["column"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-threshold",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["algorithm"] ?? null));
    cargs.push(execution.inputFile((params["design"] ?? null)));
    cargs.push(execution.inputFile((params["contrast"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function connectomestats_outputs(
    params: ConnectomestatsParameters,
    execution: Execution,
): ConnectomestatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConnectomestatsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function connectomestats_execute(
    params: ConnectomestatsParameters,
    execution: Execution,
): ConnectomestatsOutputs {
    /**
     * Connectome group-wise statistics at the edge level using non-parametric permutation testing.
     * 
     * For the TFNBS algorithm, default parameters for statistical enhancement have been set based on the work in: 
     * Vinokur, L.; Zalesky, A.; Raffelt, D.; Smith, R.E. & Connelly, A. A Novel Threshold-Free Network-Based Statistics Method: Demonstration using Simulated Pathology. OHBM, 2015, 4144; 
     * and: 
     * Vinokur, L.; Zalesky, A.; Raffelt, D.; Smith, R.E. & Connelly, A. A novel threshold-free network-based statistical method: Demonstration and parameter optimisation using in vivo simulated pathology. In Proc ISMRM, 2015, 2846. 
     * Note however that not only was the optimisation of these parameters not very precise, but the outcomes of statistical inference (for both this algorithm and the NBS method) can vary markedly for even small changes to enhancement parameters. Therefore the specificity of results obtained using either of these methods should be interpreted with caution.
     * 
     * In some software packages, a column of ones is automatically added to the GLM design matrix; the purpose of this column is to estimate the "global intercept", which is the predicted value of the observed variable if all explanatory variables were to be zero. However there are rare situations where including such a column would not be appropriate for a particular experimental design. Hence, in MRtrix3 statistical inference commands, it is up to the user to determine whether or not this column of ones should be included in their design matrix, and add it explicitly if necessary. The contrast matrix must also reflect the presence of this additional column.
     * 
     * References:
     * 
     * * If using the NBS algorithm: 
     * Zalesky, A.; Fornito, A. & Bullmore, E. T. Network-based statistic: Identifying differences in brain networks. 
     * NeuroImage, 2010, 53, 1197-1207
     * 
     * * If using the TFNBS algorithm: 
     * Baggio, H.C.; Abos, A.; Segura, B.; Campabadal, A.; Garcia-Diaz, A.; Uribe, C.; Compta, Y.; Marti, M.J.; Valldeoriola, F.; Junque, C. Statistical inference in brain graphs using threshold-free network-based statistics.HBM, 2018, 39, 2289-2302
     * 
     * * If using the -nonstationary option: 
     * Salimi-Khorshidi, G.; Smith, S.M. & Nichols, T.E. Adjusting the effect of nonstationarity in cluster-based and TFCE inference. 
     * Neuroimage, 2011, 54(3), 2006-19.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConnectomestatsOutputs`).
     */
    params = execution.params(params)
    const cargs = connectomestats_cargs(params, execution)
    const ret = connectomestats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function connectomestats(
    input: InputPathType,
    algorithm: string,
    design: InputPathType,
    contrast: InputPathType,
    output: string,
    notest: boolean = false,
    errors: string | null = null,
    exchange_within: InputPathType | null = null,
    exchange_whole: InputPathType | null = null,
    strong: boolean = false,
    nshuffles: number | null = null,
    permutations: InputPathType | null = null,
    nonstationarity: boolean = false,
    skew_nonstationarity: number | null = null,
    nshuffles_nonstationarity: number | null = null,
    permutations_nonstationarity: InputPathType | null = null,
    tfce_dh: number | null = null,
    tfce_e: number | null = null,
    tfce_h: number | null = null,
    variance: InputPathType | null = null,
    ftests: InputPathType | null = null,
    fonly: boolean = false,
    column: Array<ConnectomestatsColumnParameters> | null = null,
    threshold: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<ConnectomestatsConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): ConnectomestatsOutputs {
    /**
     * Connectome group-wise statistics at the edge level using non-parametric permutation testing.
     * 
     * For the TFNBS algorithm, default parameters for statistical enhancement have been set based on the work in: 
     * Vinokur, L.; Zalesky, A.; Raffelt, D.; Smith, R.E. & Connelly, A. A Novel Threshold-Free Network-Based Statistics Method: Demonstration using Simulated Pathology. OHBM, 2015, 4144; 
     * and: 
     * Vinokur, L.; Zalesky, A.; Raffelt, D.; Smith, R.E. & Connelly, A. A novel threshold-free network-based statistical method: Demonstration and parameter optimisation using in vivo simulated pathology. In Proc ISMRM, 2015, 2846. 
     * Note however that not only was the optimisation of these parameters not very precise, but the outcomes of statistical inference (for both this algorithm and the NBS method) can vary markedly for even small changes to enhancement parameters. Therefore the specificity of results obtained using either of these methods should be interpreted with caution.
     * 
     * In some software packages, a column of ones is automatically added to the GLM design matrix; the purpose of this column is to estimate the "global intercept", which is the predicted value of the observed variable if all explanatory variables were to be zero. However there are rare situations where including such a column would not be appropriate for a particular experimental design. Hence, in MRtrix3 statistical inference commands, it is up to the user to determine whether or not this column of ones should be included in their design matrix, and add it explicitly if necessary. The contrast matrix must also reflect the presence of this additional column.
     * 
     * References:
     * 
     * * If using the NBS algorithm: 
     * Zalesky, A.; Fornito, A. & Bullmore, E. T. Network-based statistic: Identifying differences in brain networks. 
     * NeuroImage, 2010, 53, 1197-1207
     * 
     * * If using the TFNBS algorithm: 
     * Baggio, H.C.; Abos, A.; Segura, B.; Campabadal, A.; Garcia-Diaz, A.; Uribe, C.; Compta, Y.; Marti, M.J.; Valldeoriola, F.; Junque, C. Statistical inference in brain graphs using threshold-free network-based statistics.HBM, 2018, 39, 2289-2302
     * 
     * * If using the -nonstationary option: 
     * Salimi-Khorshidi, G.; Smith, S.M. & Nichols, T.E. Adjusting the effect of nonstationarity in cluster-based and TFCE inference. 
     * Neuroimage, 2011, 54(3), 2006-19.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input a text file listing the file names of the input connectomes
     * @param algorithm the algorithm to use in network-based clustering/enhancement. Options are: nbs, tfnbs, none
     * @param design the design matrix
     * @param contrast the contrast matrix
     * @param output the filename prefix for all output.
     * @param notest don't perform statistical inference; only output population statistics (effect size, stdev etc)
     * @param errors specify nature of errors for shuffling; options are: ee,ise,both (default: ee)
     * @param exchange_within specify blocks of observations within each of which data may undergo restricted exchange
     * @param exchange_whole specify blocks of observations that may be exchanged with one another (for independent and symmetric errors, sign-flipping will occur block-wise)
     * @param strong use strong familywise error control across multiple hypotheses
     * @param nshuffles the number of shuffles (default: 5000)
     * @param permutations manually define the permutations (relabelling). The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM). Overrides the -nshuffles option.
     * @param nonstationarity perform non-stationarity correction
     * @param skew_nonstationarity specify the skew parameter for empirical statistic calculation (default for this command is 1)
     * @param nshuffles_nonstationarity the number of shuffles to use when precomputing the empirical statistic image for non-stationarity correction (default: 5000)
     * @param permutations_nonstationarity manually define the permutations (relabelling) for computing the emprical statistics for non-stationarity correction. The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM) Overrides the -nshuffles_nonstationarity option.
     * @param tfce_dh the height increment used in the tfce integration (default: 0.1)
     * @param tfce_e tfce extent exponent (default: 0.4)
     * @param tfce_h tfce height exponent (default: 3)
     * @param variance define variance groups for the G-statistic; measurements for which the expected variance is equivalent should contain the same index
     * @param ftests perform F-tests; input text file should contain, for each F-test, a row containing ones and zeros, where ones indicate the rows of the contrast matrix to be included in the F-test.
     * @param fonly only assess F-tests; do not perform statistical inference on entries in the contrast matrix
     * @param column add a column to the design matrix corresponding to subject edge-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
     * @param threshold the t-statistic value to use in threshold-based clustering algorithms
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConnectomestatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONNECTOMESTATS_METADATA);
    const params = connectomestats_params(input, algorithm, design, contrast, output, notest, errors, exchange_within, exchange_whole, strong, nshuffles, permutations, nonstationarity, skew_nonstationarity, nshuffles_nonstationarity, permutations_nonstationarity, tfce_dh, tfce_e, tfce_h, variance, ftests, fonly, column, threshold, info, quiet, debug, force, nthreads, config, help, version)
    return connectomestats_execute(params, execution);
}


export {
      CONNECTOMESTATS_METADATA,
      ConnectomestatsColumnParameters,
      ConnectomestatsConfigParameters,
      ConnectomestatsOutputs,
      ConnectomestatsParameters,
      connectomestats,
      connectomestats_column_params,
      connectomestats_config_params,
      connectomestats_params,
};
