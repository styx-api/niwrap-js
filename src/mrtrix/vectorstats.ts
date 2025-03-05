// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VECTORSTATS_METADATA: Metadata = {
    id: "a8a67c93f9ad1cdf03ad2a1e473010538e53830b.boutiques",
    name: "vectorstats",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface VectorstatsColumnParameters {
    "__STYXTYPE__": "column";
    "path": InputPathType;
}


interface VectorstatsConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface VectorstatsParameters {
    "__STYXTYPE__": "vectorstats";
    "notest": boolean;
    "errors"?: string | null | undefined;
    "exchange_within"?: InputPathType | null | undefined;
    "exchange_whole"?: InputPathType | null | undefined;
    "strong": boolean;
    "nshuffles"?: number | null | undefined;
    "permutations"?: InputPathType | null | undefined;
    "variance"?: InputPathType | null | undefined;
    "ftests"?: InputPathType | null | undefined;
    "fonly": boolean;
    "column"?: Array<VectorstatsColumnParameters> | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<VectorstatsConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
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
        "vectorstats": vectorstats_cargs,
        "column": vectorstats_column_cargs,
        "config": vectorstats_config_cargs,
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


function vectorstats_column_params(
    path: InputPathType,
): VectorstatsColumnParameters {
    /**
     * Build parameters.
    
     * @param path add a column to the design matrix corresponding to subject element-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "column" as const,
        "path": path,
    };
    return params;
}


function vectorstats_column_cargs(
    params: VectorstatsColumnParameters,
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


function vectorstats_config_params(
    key: string,
    value: string,
): VectorstatsConfigParameters {
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


function vectorstats_config_cargs(
    params: VectorstatsConfigParameters,
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
 * Output object returned when calling `vectorstats(...)`.
 *
 * @interface
 */
interface VectorstatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function vectorstats_params(
    input: InputPathType,
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
    variance: InputPathType | null = null,
    ftests: InputPathType | null = null,
    fonly: boolean = false,
    column: Array<VectorstatsColumnParameters> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<VectorstatsConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): VectorstatsParameters {
    /**
     * Build parameters.
    
     * @param input a text file listing the file names of the input subject data
     * @param design the design matrix
     * @param contrast the contrast matrix
     * @param output the filename prefix for all output
     * @param notest don't perform statistical inference; only output population statistics (effect size, stdev etc)
     * @param errors specify nature of errors for shuffling; options are: ee,ise,both (default: ee)
     * @param exchange_within specify blocks of observations within each of which data may undergo restricted exchange
     * @param exchange_whole specify blocks of observations that may be exchanged with one another (for independent and symmetric errors, sign-flipping will occur block-wise)
     * @param strong use strong familywise error control across multiple hypotheses
     * @param nshuffles the number of shuffles (default: 5000)
     * @param permutations manually define the permutations (relabelling). The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM). Overrides the -nshuffles option.
     * @param variance define variance groups for the G-statistic; measurements for which the expected variance is equivalent should contain the same index
     * @param ftests perform F-tests; input text file should contain, for each F-test, a row containing ones and zeros, where ones indicate the rows of the contrast matrix to be included in the F-test.
     * @param fonly only assess F-tests; do not perform statistical inference on entries in the contrast matrix
     * @param column add a column to the design matrix corresponding to subject element-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
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
        "__STYXTYPE__": "vectorstats" as const,
        "notest": notest,
        "strong": strong,
        "fonly": fonly,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
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
    if (variance !== null) {
        params["variance"] = variance;
    }
    if (ftests !== null) {
        params["ftests"] = ftests;
    }
    if (column !== null) {
        params["column"] = column;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function vectorstats_cargs(
    params: VectorstatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("vectorstats");
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
    cargs.push(execution.inputFile((params["design"] ?? null)));
    cargs.push(execution.inputFile((params["contrast"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function vectorstats_outputs(
    params: VectorstatsParameters,
    execution: Execution,
): VectorstatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VectorstatsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function vectorstats_execute(
    params: VectorstatsParameters,
    execution: Execution,
): VectorstatsOutputs {
    /**
     * Statistical testing of vector data using non-parametric permutation testing.
     * 
     * This command can be used to perform permutation testing of any form of data. The data for each input subject must be stored in a text file, with one value per row. The data for each row across subjects will be tested independently, i.e. there is no statistical enhancement that occurs between the data; however family-wise error control will be used.
     * 
     * In some software packages, a column of ones is automatically added to the GLM design matrix; the purpose of this column is to estimate the "global intercept", which is the predicted value of the observed variable if all explanatory variables were to be zero. However there are rare situations where including such a column would not be appropriate for a particular experimental design. Hence, in MRtrix3 statistical inference commands, it is up to the user to determine whether or not this column of ones should be included in their design matrix, and add it explicitly if necessary. The contrast matrix must also reflect the presence of this additional column.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VectorstatsOutputs`).
     */
    params = execution.params(params)
    const cargs = vectorstats_cargs(params, execution)
    const ret = vectorstats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function vectorstats(
    input: InputPathType,
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
    variance: InputPathType | null = null,
    ftests: InputPathType | null = null,
    fonly: boolean = false,
    column: Array<VectorstatsColumnParameters> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<VectorstatsConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): VectorstatsOutputs {
    /**
     * Statistical testing of vector data using non-parametric permutation testing.
     * 
     * This command can be used to perform permutation testing of any form of data. The data for each input subject must be stored in a text file, with one value per row. The data for each row across subjects will be tested independently, i.e. there is no statistical enhancement that occurs between the data; however family-wise error control will be used.
     * 
     * In some software packages, a column of ones is automatically added to the GLM design matrix; the purpose of this column is to estimate the "global intercept", which is the predicted value of the observed variable if all explanatory variables were to be zero. However there are rare situations where including such a column would not be appropriate for a particular experimental design. Hence, in MRtrix3 statistical inference commands, it is up to the user to determine whether or not this column of ones should be included in their design matrix, and add it explicitly if necessary. The contrast matrix must also reflect the presence of this additional column.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input a text file listing the file names of the input subject data
     * @param design the design matrix
     * @param contrast the contrast matrix
     * @param output the filename prefix for all output
     * @param notest don't perform statistical inference; only output population statistics (effect size, stdev etc)
     * @param errors specify nature of errors for shuffling; options are: ee,ise,both (default: ee)
     * @param exchange_within specify blocks of observations within each of which data may undergo restricted exchange
     * @param exchange_whole specify blocks of observations that may be exchanged with one another (for independent and symmetric errors, sign-flipping will occur block-wise)
     * @param strong use strong familywise error control across multiple hypotheses
     * @param nshuffles the number of shuffles (default: 5000)
     * @param permutations manually define the permutations (relabelling). The input should be a text file defining a m x n matrix, where each relabelling is defined as a column vector of size m, and the number of columns, n, defines the number of permutations. Can be generated with the palm_quickperms function in PALM (http://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM). Overrides the -nshuffles option.
     * @param variance define variance groups for the G-statistic; measurements for which the expected variance is equivalent should contain the same index
     * @param ftests perform F-tests; input text file should contain, for each F-test, a row containing ones and zeros, where ones indicate the rows of the contrast matrix to be included in the F-test.
     * @param fonly only assess F-tests; do not perform statistical inference on entries in the contrast matrix
     * @param column add a column to the design matrix corresponding to subject element-wise values (note that the contrast matrix must include an additional column for each use of this option); the text file provided via this option should contain a file name for each subject
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VectorstatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VECTORSTATS_METADATA);
    const params = vectorstats_params(input, design, contrast, output, notest, errors, exchange_within, exchange_whole, strong, nshuffles, permutations, variance, ftests, fonly, column, info, quiet, debug, force, nthreads, config, help, version)
    return vectorstats_execute(params, execution);
}


export {
      VECTORSTATS_METADATA,
      VectorstatsColumnParameters,
      VectorstatsConfigParameters,
      VectorstatsOutputs,
      VectorstatsParameters,
      vectorstats,
      vectorstats_column_params,
      vectorstats_config_params,
      vectorstats_params,
};
