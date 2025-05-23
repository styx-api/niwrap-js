// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONG_STATS_COMBINE_METADATA: Metadata = {
    id: "bc07fa2d21f0070237805d7567bf0841a65a42f5.boutiques",
    name: "long_stats_combine",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongStatsCombineParameters {
    "__STYXTYPE__": "long_stats_combine";
    "qdec": InputPathType;
    "stats": string;
    "measure": string;
    "subject_dir": string;
    "output_qdec": string;
    "output_stats"?: string | null | undefined;
    "input_stats"?: InputPathType | null | undefined;
    "cross_sectional": boolean;
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
        "long_stats_combine": long_stats_combine_cargs,
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
        "long_stats_combine": long_stats_combine_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `long_stats_combine(...)`.
 *
 * @interface
 */
interface LongStatsCombineOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output long qdec table
     */
    output_qdec_file: OutputPathType;
    /**
     * Stacked stats table for all subjects, all time points
     */
    output_stacked_stats_file: OutputPathType | null;
}


function long_stats_combine_params(
    qdec: InputPathType,
    stats: string,
    measure: string,
    subject_dir: string,
    output_qdec: string,
    output_stats: string | null = null,
    input_stats: InputPathType | null = null,
    cross_sectional: boolean = false,
): LongStatsCombineParameters {
    /**
     * Build parameters.
    
     * @param qdec QDEC table file specifying the subjects and time points. File has first columns: fsid  fsid-base
     * @param stats The stats file, e.g. aseg.stats or lh.aparc.stats
     * @param measure The stats measure (e.g. volume, thickness, mean, std)
     * @param subject_dir Full path to FreeSurfer subjects directory
     * @param output_qdec File name of output long qdec table
     * @param output_stats File name to output stacked stats table (all subjects, all time points)
     * @param input_stats File name of stacked stats table (same order as qdec), instead of using --stats and --meas
     * @param cross_sectional Use cross sectional results (for testing only)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "long_stats_combine" as const,
        "qdec": qdec,
        "stats": stats,
        "measure": measure,
        "subject_dir": subject_dir,
        "output_qdec": output_qdec,
        "cross_sectional": cross_sectional,
    };
    if (output_stats !== null) {
        params["output_stats"] = output_stats;
    }
    if (input_stats !== null) {
        params["input_stats"] = input_stats;
    }
    return params;
}


function long_stats_combine_cargs(
    params: LongStatsCombineParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("long_stats_combine");
    cargs.push(
        "--qdec",
        execution.inputFile((params["qdec"] ?? null))
    );
    cargs.push(
        "--stats",
        (params["stats"] ?? null)
    );
    cargs.push(
        "--meas",
        (params["measure"] ?? null)
    );
    cargs.push(
        "--sd",
        (params["subject_dir"] ?? null)
    );
    cargs.push(
        "--outqdec",
        (params["output_qdec"] ?? null)
    );
    if ((params["output_stats"] ?? null) !== null) {
        cargs.push(
            "--outstats",
            (params["output_stats"] ?? null)
        );
    }
    if ((params["input_stats"] ?? null) !== null) {
        cargs.push(
            "--instats",
            execution.inputFile((params["input_stats"] ?? null))
        );
    }
    if ((params["cross_sectional"] ?? null)) {
        cargs.push("--cross");
    }
    return cargs;
}


function long_stats_combine_outputs(
    params: LongStatsCombineParameters,
    execution: Execution,
): LongStatsCombineOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongStatsCombineOutputs = {
        root: execution.outputFile("."),
        output_qdec_file: execution.outputFile([(params["output_qdec"] ?? null)].join('')),
        output_stacked_stats_file: ((params["output_stats"] ?? null) !== null) ? execution.outputFile([(params["output_stats"] ?? null)].join('')) : null,
    };
    return ret;
}


function long_stats_combine_execute(
    params: LongStatsCombineParameters,
    execution: Execution,
): LongStatsCombineOutputs {
    /**
     * Adds columns from stats into longitudinal qdec table, using longitudinally processed results.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongStatsCombineOutputs`).
     */
    params = execution.params(params)
    const cargs = long_stats_combine_cargs(params, execution)
    const ret = long_stats_combine_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function long_stats_combine(
    qdec: InputPathType,
    stats: string,
    measure: string,
    subject_dir: string,
    output_qdec: string,
    output_stats: string | null = null,
    input_stats: InputPathType | null = null,
    cross_sectional: boolean = false,
    runner: Runner | null = null,
): LongStatsCombineOutputs {
    /**
     * Adds columns from stats into longitudinal qdec table, using longitudinally processed results.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param qdec QDEC table file specifying the subjects and time points. File has first columns: fsid  fsid-base
     * @param stats The stats file, e.g. aseg.stats or lh.aparc.stats
     * @param measure The stats measure (e.g. volume, thickness, mean, std)
     * @param subject_dir Full path to FreeSurfer subjects directory
     * @param output_qdec File name of output long qdec table
     * @param output_stats File name to output stacked stats table (all subjects, all time points)
     * @param input_stats File name of stacked stats table (same order as qdec), instead of using --stats and --meas
     * @param cross_sectional Use cross sectional results (for testing only)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongStatsCombineOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONG_STATS_COMBINE_METADATA);
    const params = long_stats_combine_params(qdec, stats, measure, subject_dir, output_qdec, output_stats, input_stats, cross_sectional)
    return long_stats_combine_execute(params, execution);
}


export {
      LONG_STATS_COMBINE_METADATA,
      LongStatsCombineOutputs,
      LongStatsCombineParameters,
      long_stats_combine,
      long_stats_combine_params,
};
