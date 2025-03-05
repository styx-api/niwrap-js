// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAP_TRACK_ID_METADATA: Metadata = {
    id: "8a4654eaf53cc77b2cf484e321c0f2ad7ebde3ea.boutiques",
    name: "map_TrackID",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface MapTrackIdParameters {
    "__STYXTYPE__": "map_TrackID";
    "prefix": string;
    "in_trk": InputPathType;
    "in_map": InputPathType;
    "reference": InputPathType;
    "verbose": boolean;
    "orig_zero": boolean;
    "line_only_num": boolean;
    "already_inv": boolean;
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
        "map_TrackID": map_track_id_cargs,
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
        "map_TrackID": map_track_id_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `map_track_id(...)`.
 *
 * @interface
 */
interface MapTrackIdOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Mapped track file to new space
     */
    output_trk_file: OutputPathType;
}


function map_track_id_params(
    prefix: string,
    in_trk: InputPathType,
    in_map: InputPathType,
    reference: InputPathType,
    verbose: boolean = false,
    orig_zero: boolean = false,
    line_only_num: boolean = false,
    already_inv: boolean = false,
): MapTrackIdParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix for the output track file.
     * @param in_trk The name of the *.trk file to be mapped.
     * @param in_map Single line of matrix values for the transformation.
     * @param reference 3D data set in the space to which the TRK file is being mapped.
     * @param verbose Verbose output.
     * @param orig_zero Put (0,0,0) as the origin in the output *.trk file.
     * @param line_only_num If your 1D_MATR file is just 12 numbers in a row.
     * @param already_inv If you have inverted the mapping or use another program than 3dAllineate.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "map_TrackID" as const,
        "prefix": prefix,
        "in_trk": in_trk,
        "in_map": in_map,
        "reference": reference,
        "verbose": verbose,
        "orig_zero": orig_zero,
        "line_only_num": line_only_num,
        "already_inv": already_inv,
    };
    return params;
}


function map_track_id_cargs(
    params: MapTrackIdParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("map_TrackID");
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    cargs.push(
        "-in_trk",
        execution.inputFile((params["in_trk"] ?? null))
    );
    cargs.push(
        "-in_map",
        execution.inputFile((params["in_map"] ?? null))
    );
    cargs.push(
        "-ref",
        execution.inputFile((params["reference"] ?? null))
    );
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["orig_zero"] ?? null)) {
        cargs.push("-orig_zero");
    }
    if ((params["line_only_num"] ?? null)) {
        cargs.push("-line_only_num");
    }
    if ((params["already_inv"] ?? null)) {
        cargs.push("-already_inv");
    }
    return cargs;
}


function map_track_id_outputs(
    params: MapTrackIdParameters,
    execution: Execution,
): MapTrackIdOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MapTrackIdOutputs = {
        root: execution.outputFile("."),
        output_trk_file: execution.outputFile([(params["prefix"] ?? null), ".trk"].join('')),
    };
    return ret;
}


function map_track_id_execute(
    params: MapTrackIdParameters,
    execution: Execution,
): MapTrackIdOutputs {
    /**
     * Maps the track file (*.trk) output of 3dTrackID to another space using the 1Dmatrix_save info of 3dAllineate.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MapTrackIdOutputs`).
     */
    params = execution.params(params)
    const cargs = map_track_id_cargs(params, execution)
    const ret = map_track_id_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function map_track_id(
    prefix: string,
    in_trk: InputPathType,
    in_map: InputPathType,
    reference: InputPathType,
    verbose: boolean = false,
    orig_zero: boolean = false,
    line_only_num: boolean = false,
    already_inv: boolean = false,
    runner: Runner | null = null,
): MapTrackIdOutputs {
    /**
     * Maps the track file (*.trk) output of 3dTrackID to another space using the 1Dmatrix_save info of 3dAllineate.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix for the output track file.
     * @param in_trk The name of the *.trk file to be mapped.
     * @param in_map Single line of matrix values for the transformation.
     * @param reference 3D data set in the space to which the TRK file is being mapped.
     * @param verbose Verbose output.
     * @param orig_zero Put (0,0,0) as the origin in the output *.trk file.
     * @param line_only_num If your 1D_MATR file is just 12 numbers in a row.
     * @param already_inv If you have inverted the mapping or use another program than 3dAllineate.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MapTrackIdOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAP_TRACK_ID_METADATA);
    const params = map_track_id_params(prefix, in_trk, in_map, reference, verbose, orig_zero, line_only_num, already_inv)
    return map_track_id_execute(params, execution);
}


export {
      MAP_TRACK_ID_METADATA,
      MapTrackIdOutputs,
      MapTrackIdParameters,
      map_track_id,
      map_track_id_params,
};
