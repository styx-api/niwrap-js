// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RSFGEN_METADATA: Metadata = {
    id: "11b25a34307a16d17dd031e0865f508903b6754c.boutiques",
    name: "RSFgen",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface RsfgenParameters {
    "__STYXTYPE__": "RSFgen";
    "length": number;
    "num_experimental_conditions": number;
    "block_length"?: string | null | undefined;
    "random_seed"?: number | null | undefined;
    "suppress_output_flag": boolean;
    "single_file_flag": boolean;
    "single_column_flag": boolean;
    "output_prefix"?: string | null | undefined;
    "num_reps"?: string | null | undefined;
    "permutation_seed"?: number | null | undefined;
    "markov_file"?: InputPathType | null | undefined;
    "prob_zero"?: number | null | undefined;
    "input_table"?: InputPathType | null | undefined;
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
        "RSFgen": rsfgen_cargs,
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
        "RSFgen": rsfgen_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `rsfgen(...)`.
 *
 * @interface
 */
interface RsfgenOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output .1D stimulus function files prefixed with the provided output prefix.
     */
    output_files: OutputPathType | null;
}


function rsfgen_params(
    length: number,
    num_experimental_conditions: number,
    block_length: string | null = null,
    random_seed: number | null = null,
    suppress_output_flag: boolean = false,
    single_file_flag: boolean = false,
    single_column_flag: boolean = false,
    output_prefix: string | null = null,
    num_reps: string | null = null,
    permutation_seed: number | null = null,
    markov_file: InputPathType | null = null,
    prob_zero: number | null = null,
    input_table: InputPathType | null = null,
): RsfgenParameters {
    /**
     * Build parameters.
    
     * @param length Length of time series.
     * @param num_experimental_conditions Number of input stimuli (experimental conditions).
     * @param block_length Block length for stimulus. Must specify stimulus index and length. Example: -nblock 1 5
     * @param random_seed Random number seed.
     * @param suppress_output_flag Flag to suppress screen output.
     * @param single_file_flag Place stimulus functions into a single .1D file.
     * @param single_column_flag Write stimulus functions as a single column of decimal integers.
     * @param output_prefix Prefix for output .1D stimulus functions.
     * @param num_reps Number of repetitions for stimulus.
     * @param permutation_seed Stim label permutation random number seed.
     * @param markov_file File containing the transition probability matrix.
     * @param prob_zero Probability of a zero (i.e., null) state (default: 0).
     * @param input_table Filename of column or table of numbers. All other input options (except -seed and -prefix) are ignored with this option.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "RSFgen" as const,
        "length": length,
        "num_experimental_conditions": num_experimental_conditions,
        "suppress_output_flag": suppress_output_flag,
        "single_file_flag": single_file_flag,
        "single_column_flag": single_column_flag,
    };
    if (block_length !== null) {
        params["block_length"] = block_length;
    }
    if (random_seed !== null) {
        params["random_seed"] = random_seed;
    }
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (num_reps !== null) {
        params["num_reps"] = num_reps;
    }
    if (permutation_seed !== null) {
        params["permutation_seed"] = permutation_seed;
    }
    if (markov_file !== null) {
        params["markov_file"] = markov_file;
    }
    if (prob_zero !== null) {
        params["prob_zero"] = prob_zero;
    }
    if (input_table !== null) {
        params["input_table"] = input_table;
    }
    return params;
}


function rsfgen_cargs(
    params: RsfgenParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("RSFgen");
    cargs.push(
        "-nt",
        String((params["length"] ?? null))
    );
    cargs.push(
        "-num_stimts",
        String((params["num_experimental_conditions"] ?? null))
    );
    if ((params["block_length"] ?? null) !== null) {
        cargs.push(
            "-nblock",
            (params["block_length"] ?? null)
        );
    }
    if ((params["random_seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            String((params["random_seed"] ?? null))
        );
    }
    if ((params["suppress_output_flag"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["single_file_flag"] ?? null)) {
        cargs.push("-one_file");
    }
    if ((params["single_column_flag"] ?? null)) {
        cargs.push("-one_col");
    }
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["num_reps"] ?? null) !== null) {
        cargs.push(
            "-nreps",
            (params["num_reps"] ?? null)
        );
    }
    if ((params["permutation_seed"] ?? null) !== null) {
        cargs.push(
            "-pseed",
            String((params["permutation_seed"] ?? null))
        );
    }
    if ((params["markov_file"] ?? null) !== null) {
        cargs.push(
            "-markov",
            execution.inputFile((params["markov_file"] ?? null))
        );
    }
    if ((params["prob_zero"] ?? null) !== null) {
        cargs.push(
            "-pzero",
            String((params["prob_zero"] ?? null))
        );
    }
    if ((params["input_table"] ?? null) !== null) {
        cargs.push(
            "-table",
            execution.inputFile((params["input_table"] ?? null))
        );
    }
    return cargs;
}


function rsfgen_outputs(
    params: RsfgenParameters,
    execution: Execution,
): RsfgenOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RsfgenOutputs = {
        root: execution.outputFile("."),
        output_files: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "1.1D"].join('')) : null,
    };
    return ret;
}


function rsfgen_execute(
    params: RsfgenParameters,
    execution: Execution,
): RsfgenOutputs {
    /**
     * Program to generate random stimulus functions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RsfgenOutputs`).
     */
    params = execution.params(params)
    const cargs = rsfgen_cargs(params, execution)
    const ret = rsfgen_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function rsfgen(
    length: number,
    num_experimental_conditions: number,
    block_length: string | null = null,
    random_seed: number | null = null,
    suppress_output_flag: boolean = false,
    single_file_flag: boolean = false,
    single_column_flag: boolean = false,
    output_prefix: string | null = null,
    num_reps: string | null = null,
    permutation_seed: number | null = null,
    markov_file: InputPathType | null = null,
    prob_zero: number | null = null,
    input_table: InputPathType | null = null,
    runner: Runner | null = null,
): RsfgenOutputs {
    /**
     * Program to generate random stimulus functions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param length Length of time series.
     * @param num_experimental_conditions Number of input stimuli (experimental conditions).
     * @param block_length Block length for stimulus. Must specify stimulus index and length. Example: -nblock 1 5
     * @param random_seed Random number seed.
     * @param suppress_output_flag Flag to suppress screen output.
     * @param single_file_flag Place stimulus functions into a single .1D file.
     * @param single_column_flag Write stimulus functions as a single column of decimal integers.
     * @param output_prefix Prefix for output .1D stimulus functions.
     * @param num_reps Number of repetitions for stimulus.
     * @param permutation_seed Stim label permutation random number seed.
     * @param markov_file File containing the transition probability matrix.
     * @param prob_zero Probability of a zero (i.e., null) state (default: 0).
     * @param input_table Filename of column or table of numbers. All other input options (except -seed and -prefix) are ignored with this option.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RsfgenOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RSFGEN_METADATA);
    const params = rsfgen_params(length, num_experimental_conditions, block_length, random_seed, suppress_output_flag, single_file_flag, single_column_flag, output_prefix, num_reps, permutation_seed, markov_file, prob_zero, input_table)
    return rsfgen_execute(params, execution);
}


export {
      RSFGEN_METADATA,
      RsfgenOutputs,
      RsfgenParameters,
      rsfgen,
      rsfgen_params,
};
