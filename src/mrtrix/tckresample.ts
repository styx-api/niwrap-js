// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TCKRESAMPLE_METADATA: Metadata = {
    id: "96fe07e9bfb00489a4bfbac66a8efe1f3a526da3.boutiques",
    name: "tckresample",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TckresampleLineParameters {
    "__STYXTYPE__": "line";
    "num": number;
    "start": Array<number>;
    "end": Array<number>;
}


interface TckresampleArcParameters {
    "__STYXTYPE__": "arc";
    "num": number;
    "start": Array<number>;
    "mid": Array<number>;
    "end": Array<number>;
}


interface TckresampleConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TckresampleParameters {
    "__STYXTYPE__": "tckresample";
    "upsample"?: number | null | undefined;
    "downsample"?: number | null | undefined;
    "step_size"?: number | null | undefined;
    "num_points"?: number | null | undefined;
    "endpoints": boolean;
    "line"?: TckresampleLineParameters | null | undefined;
    "arc"?: TckresampleArcParameters | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TckresampleConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "in_tracks": InputPathType;
    "out_tracks": string;
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
        "tckresample": tckresample_cargs,
        "line": tckresample_line_cargs,
        "arc": tckresample_arc_cargs,
        "config": tckresample_config_cargs,
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
        "tckresample": tckresample_outputs,
    };
    return outputsFuncs[t];
}


function tckresample_line_params(
    num: number,
    start: Array<number>,
    end: Array<number>,
): TckresampleLineParameters {
    /**
     * Build parameters.
    
     * @param num resample tracks at 'num' equidistant locations along a line between 'start' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param start resample tracks at 'num' equidistant locations along a line between 'start' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param end resample tracks at 'num' equidistant locations along a line between 'start' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "line" as const,
        "num": num,
        "start": start,
        "end": end,
    };
    return params;
}


function tckresample_line_cargs(
    params: TckresampleLineParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-line");
    cargs.push(String((params["num"] ?? null)));
    cargs.push((params["start"] ?? null).map(String).join(","));
    cargs.push((params["end"] ?? null).map(String).join(","));
    return cargs;
}


function tckresample_arc_params(
    num: number,
    start: Array<number>,
    mid: Array<number>,
    end: Array<number>,
): TckresampleArcParameters {
    /**
     * Build parameters.
    
     * @param num resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param start resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param mid resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param end resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "arc" as const,
        "num": num,
        "start": start,
        "mid": mid,
        "end": end,
    };
    return params;
}


function tckresample_arc_cargs(
    params: TckresampleArcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-arc");
    cargs.push(String((params["num"] ?? null)));
    cargs.push((params["start"] ?? null).map(String).join(","));
    cargs.push((params["mid"] ?? null).map(String).join(","));
    cargs.push((params["end"] ?? null).map(String).join(","));
    return cargs;
}


function tckresample_config_params(
    key: string,
    value: string,
): TckresampleConfigParameters {
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


function tckresample_config_cargs(
    params: TckresampleConfigParameters,
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
 * Output object returned when calling `tckresample(...)`.
 *
 * @interface
 */
interface TckresampleOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output resampled tracks
     */
    out_tracks: OutputPathType;
}


function tckresample_params(
    in_tracks: InputPathType,
    out_tracks: string,
    upsample: number | null = null,
    downsample: number | null = null,
    step_size: number | null = null,
    num_points: number | null = null,
    endpoints: boolean = false,
    line: TckresampleLineParameters | null = null,
    arc: TckresampleArcParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckresampleConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TckresampleParameters {
    /**
     * Build parameters.
    
     * @param in_tracks the input track file
     * @param out_tracks the output resampled tracks
     * @param upsample increase the density of points along the length of each streamline by some factor (may improve mapping streamlines to ROIs, and/or visualisation)
     * @param downsample increase the density of points along the length of each streamline by some factor (decreases required storage space)
     * @param step_size re-sample the streamlines to a desired step size (in mm)
     * @param num_points re-sample each streamline to a fixed number of points
     * @param endpoints only output the two endpoints of each streamline
     * @param line resample tracks at 'num' equidistant locations along a line between 'start' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param arc resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
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
        "__STYXTYPE__": "tckresample" as const,
        "endpoints": endpoints,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "in_tracks": in_tracks,
        "out_tracks": out_tracks,
    };
    if (upsample !== null) {
        params["upsample"] = upsample;
    }
    if (downsample !== null) {
        params["downsample"] = downsample;
    }
    if (step_size !== null) {
        params["step_size"] = step_size;
    }
    if (num_points !== null) {
        params["num_points"] = num_points;
    }
    if (line !== null) {
        params["line"] = line;
    }
    if (arc !== null) {
        params["arc"] = arc;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tckresample_cargs(
    params: TckresampleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tckresample");
    if ((params["upsample"] ?? null) !== null) {
        cargs.push(
            "-upsample",
            String((params["upsample"] ?? null))
        );
    }
    if ((params["downsample"] ?? null) !== null) {
        cargs.push(
            "-downsample",
            String((params["downsample"] ?? null))
        );
    }
    if ((params["step_size"] ?? null) !== null) {
        cargs.push(
            "-step_size",
            String((params["step_size"] ?? null))
        );
    }
    if ((params["num_points"] ?? null) !== null) {
        cargs.push(
            "-num_points",
            String((params["num_points"] ?? null))
        );
    }
    if ((params["endpoints"] ?? null)) {
        cargs.push("-endpoints");
    }
    if ((params["line"] ?? null) !== null) {
        cargs.push(...dynCargs((params["line"] ?? null).__STYXTYPE__)((params["line"] ?? null), execution));
    }
    if ((params["arc"] ?? null) !== null) {
        cargs.push(...dynCargs((params["arc"] ?? null).__STYXTYPE__)((params["arc"] ?? null), execution));
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
    cargs.push(execution.inputFile((params["in_tracks"] ?? null)));
    cargs.push((params["out_tracks"] ?? null));
    return cargs;
}


function tckresample_outputs(
    params: TckresampleParameters,
    execution: Execution,
): TckresampleOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TckresampleOutputs = {
        root: execution.outputFile("."),
        out_tracks: execution.outputFile([(params["out_tracks"] ?? null)].join('')),
    };
    return ret;
}


function tckresample_execute(
    params: TckresampleParameters,
    execution: Execution,
): TckresampleOutputs {
    /**
     * Resample each streamline in a track file to a new set of vertices.
     * 
     * It is necessary to specify precisely ONE of the command-line options for controlling how this resampling takes place; this may be either increasing or decreasing the number of samples along each streamline, or may involve changing the positions of the samples according to some specified trajectory.
     * 
     * Note that because the length of a streamline is calculated based on the sums of distances between adjacent vertices, resampling a streamline to a new set of vertices will typically change the quantified length of that streamline; the magnitude of the difference will typically depend on the discrepancy in the number of vertices, with less vertices leading to a shorter length (due to taking chordal lengths of curved trajectories).
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
    
     * @returns NamedTuple of outputs (described in `TckresampleOutputs`).
     */
    params = execution.params(params)
    const cargs = tckresample_cargs(params, execution)
    const ret = tckresample_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tckresample(
    in_tracks: InputPathType,
    out_tracks: string,
    upsample: number | null = null,
    downsample: number | null = null,
    step_size: number | null = null,
    num_points: number | null = null,
    endpoints: boolean = false,
    line: TckresampleLineParameters | null = null,
    arc: TckresampleArcParameters | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckresampleConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TckresampleOutputs {
    /**
     * Resample each streamline in a track file to a new set of vertices.
     * 
     * It is necessary to specify precisely ONE of the command-line options for controlling how this resampling takes place; this may be either increasing or decreasing the number of samples along each streamline, or may involve changing the positions of the samples according to some specified trajectory.
     * 
     * Note that because the length of a streamline is calculated based on the sums of distances between adjacent vertices, resampling a streamline to a new set of vertices will typically change the quantified length of that streamline; the magnitude of the difference will typically depend on the discrepancy in the number of vertices, with less vertices leading to a shorter length (due to taking chordal lengths of curved trajectories).
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param in_tracks the input track file
     * @param out_tracks the output resampled tracks
     * @param upsample increase the density of points along the length of each streamline by some factor (may improve mapping streamlines to ROIs, and/or visualisation)
     * @param downsample increase the density of points along the length of each streamline by some factor (decreases required storage space)
     * @param step_size re-sample the streamlines to a desired step size (in mm)
     * @param num_points re-sample each streamline to a fixed number of points
     * @param endpoints only output the two endpoints of each streamline
     * @param line resample tracks at 'num' equidistant locations along a line between 'start' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param arc resample tracks at 'num' equidistant locations along a circular arc specified by points 'start', 'mid' and 'end' (specified as comma-separated 3-vectors in scanner coordinates)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TckresampleOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TCKRESAMPLE_METADATA);
    const params = tckresample_params(in_tracks, out_tracks, upsample, downsample, step_size, num_points, endpoints, line, arc, info, quiet, debug, force, nthreads, config, help, version)
    return tckresample_execute(params, execution);
}


export {
      TCKRESAMPLE_METADATA,
      TckresampleArcParameters,
      TckresampleConfigParameters,
      TckresampleLineParameters,
      TckresampleOutputs,
      TckresampleParameters,
      tckresample,
      tckresample_arc_params,
      tckresample_config_params,
      tckresample_line_params,
      tckresample_params,
};
