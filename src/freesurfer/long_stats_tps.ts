// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONG_STATS_TPS_METADATA: Metadata = {
    id: "6c6ba4b0e888d88fa279b18e6e58656975356f16.boutiques",
    name: "long_stats_tps",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongStatsTpsParameters {
    "__STYXTYPE__": "long_stats_tps";
    "qdec_table": InputPathType;
    "stats_file": string;
    "measure": string;
    "subjects_dir": string;
    "time_point": number;
    "output_file": string;
    "qcolumn"?: string | null | undefined;
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
        "long_stats_tps": long_stats_tps_cargs,
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
        "long_stats_tps": long_stats_tps_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `long_stats_tps(...)`.
 *
 * @interface
 */
interface LongStatsTpsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing stacked results for individual time points.
     */
    stacked_results: OutputPathType;
}


function long_stats_tps_params(
    qdec_table: InputPathType,
    stats_file: string,
    measure: string,
    subjects_dir: string,
    time_point: number,
    output_file: string,
    qcolumn: string | null = null,
    cross_sectional: boolean = false,
): LongStatsTpsParameters {
    /**
     * Build parameters.
    
     * @param qdec_table qdec.table.dat file with first columns: fsid  fsid-base
     * @param stats_file Stats file without path: e.g. aseg.stats or lh.aparc.stats
     * @param measure Stats measure, e.g. volume, thickness, mean, std
     * @param subjects_dir Full path to FreeSurfer subjects directory
     * @param time_point Time point number
     * @param output_file File name of output
     * @param qcolumn Select a column from the qdec table itself (then --stats, --meas and --sd are not necessary)
     * @param cross_sectional Use cross sectional results (for testing only)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "long_stats_tps" as const,
        "qdec_table": qdec_table,
        "stats_file": stats_file,
        "measure": measure,
        "subjects_dir": subjects_dir,
        "time_point": time_point,
        "output_file": output_file,
        "cross_sectional": cross_sectional,
    };
    if (qcolumn !== null) {
        params["qcolumn"] = qcolumn;
    }
    return params;
}


function long_stats_tps_cargs(
    params: LongStatsTpsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("long_stats_tps");
    cargs.push(
        "--qdec",
        execution.inputFile((params["qdec_table"] ?? null))
    );
    cargs.push(
        "--stats",
        (params["stats_file"] ?? null)
    );
    cargs.push(
        "--meas",
        (params["measure"] ?? null)
    );
    cargs.push(
        "--sd",
        (params["subjects_dir"] ?? null)
    );
    cargs.push(
        "--tp",
        String((params["time_point"] ?? null))
    );
    cargs.push(
        "--out",
        (params["output_file"] ?? null)
    );
    if ((params["qcolumn"] ?? null) !== null) {
        cargs.push(
            "--qcol",
            (params["qcolumn"] ?? null)
        );
    }
    if ((params["cross_sectional"] ?? null)) {
        cargs.push("--cross");
    }
    return cargs;
}


function long_stats_tps_outputs(
    params: LongStatsTpsParameters,
    execution: Execution,
): LongStatsTpsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongStatsTpsOutputs = {
        root: execution.outputFile("."),
        stacked_results: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function long_stats_tps_execute(
    params: LongStatsTpsParameters,
    execution: Execution,
): LongStatsTpsOutputs {
    /**
     * Stack results for individual time points based on longitudinal qdec table.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongStatsTpsOutputs`).
     */
    params = execution.params(params)
    const cargs = long_stats_tps_cargs(params, execution)
    const ret = long_stats_tps_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function long_stats_tps(
    qdec_table: InputPathType,
    stats_file: string,
    measure: string,
    subjects_dir: string,
    time_point: number,
    output_file: string,
    qcolumn: string | null = null,
    cross_sectional: boolean = false,
    runner: Runner | null = null,
): LongStatsTpsOutputs {
    /**
     * Stack results for individual time points based on longitudinal qdec table.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param qdec_table qdec.table.dat file with first columns: fsid  fsid-base
     * @param stats_file Stats file without path: e.g. aseg.stats or lh.aparc.stats
     * @param measure Stats measure, e.g. volume, thickness, mean, std
     * @param subjects_dir Full path to FreeSurfer subjects directory
     * @param time_point Time point number
     * @param output_file File name of output
     * @param qcolumn Select a column from the qdec table itself (then --stats, --meas and --sd are not necessary)
     * @param cross_sectional Use cross sectional results (for testing only)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongStatsTpsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONG_STATS_TPS_METADATA);
    const params = long_stats_tps_params(qdec_table, stats_file, measure, subjects_dir, time_point, output_file, qcolumn, cross_sectional)
    return long_stats_tps_execute(params, execution);
}


export {
      LONG_STATS_TPS_METADATA,
      LongStatsTpsOutputs,
      LongStatsTpsParameters,
      long_stats_tps,
      long_stats_tps_params,
};
