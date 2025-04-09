// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURF_MEASURES_METADATA: Metadata = {
    id: "081416cc50152fae2d98653e2c0c325389329860.boutiques",
    name: "SurfMeasures",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfMeasuresParameters {
    "__STYXTYPE__": "SurfMeasures";
    "spec_file": InputPathType;
    "surf_A": string;
    "surf_B"?: string | null | undefined;
    "out_1D"?: string | null | undefined;
    "out_dset": string;
    "func"?: Array<string> | null | undefined;
    "surf_volume"?: InputPathType | null | undefined;
    "cmask"?: string | null | undefined;
    "debug"?: number | null | undefined;
    "dnode"?: number | null | undefined;
    "nodes_1D"?: InputPathType | null | undefined;
    "info_all": boolean;
    "info_area": boolean;
    "info_norms": boolean;
    "info_thick": boolean;
    "info_vol": boolean;
    "info_volg": boolean;
    "ver": boolean;
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
        "SurfMeasures": surf_measures_cargs,
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
        "SurfMeasures": surf_measures_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surf_measures(...)`.
 *
 * @interface
 */
interface SurfMeasuresOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output in 1D format
     */
    output_1_d: OutputPathType | null;
    /**
     * Output in specified dataset format
     */
    output_dset: OutputPathType;
}


function surf_measures_params(
    spec_file: InputPathType,
    surf_a: string,
    out_dset: string,
    surf_b: string | null = null,
    out_1_d: string | null = null,
    func: Array<string> | null = null,
    surf_volume: InputPathType | null = null,
    cmask: string | null = null,
    debug: number | null = null,
    dnode: number | null = null,
    nodes_1_d: InputPathType | null = null,
    info_all: boolean = false,
    info_area: boolean = false,
    info_norms: boolean = false,
    info_thick: boolean = false,
    info_vol: boolean = false,
    info_volg: boolean = false,
    ver: boolean = false,
): SurfMeasuresParameters {
    /**
     * Build parameters.
    
     * @param spec_file SUMA spec file containing a list of related surfaces
     * @param surf_a Surface name (in spec file) for the first surface
     * @param out_dset Output filename with dataset format
     * @param surf_b Surface name (in spec file) for the second surface
     * @param out_1_d Output filename in 1D format
     * @param func Measure function to be applied
     * @param surf_volume AFNI volume dataset associated with the surface
     * @param cmask Restrict nodes with a mask
     * @param debug Display extra run-time information with specified debug level (0-5)
     * @param dnode Display extra information for specified node
     * @param nodes_1_d Restrict output to specific nodes listed in a file
     * @param info_all Display all final info
     * @param info_area Display total area of each triangulated surface
     * @param info_norms Display info about the normals
     * @param info_thick Display minimum and maximum thickness between surfaces
     * @param info_vol Display total computed volume between surfaces
     * @param info_volg Display total computed volume estimated via Gauss' theorem
     * @param ver Show program version and compile date
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfMeasures" as const,
        "spec_file": spec_file,
        "surf_A": surf_a,
        "out_dset": out_dset,
        "info_all": info_all,
        "info_area": info_area,
        "info_norms": info_norms,
        "info_thick": info_thick,
        "info_vol": info_vol,
        "info_volg": info_volg,
        "ver": ver,
    };
    if (surf_b !== null) {
        params["surf_B"] = surf_b;
    }
    if (out_1_d !== null) {
        params["out_1D"] = out_1_d;
    }
    if (func !== null) {
        params["func"] = func;
    }
    if (surf_volume !== null) {
        params["surf_volume"] = surf_volume;
    }
    if (cmask !== null) {
        params["cmask"] = cmask;
    }
    if (debug !== null) {
        params["debug"] = debug;
    }
    if (dnode !== null) {
        params["dnode"] = dnode;
    }
    if (nodes_1_d !== null) {
        params["nodes_1D"] = nodes_1_d;
    }
    return params;
}


function surf_measures_cargs(
    params: SurfMeasuresParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfMeasures");
    cargs.push(
        "-spec",
        execution.inputFile((params["spec_file"] ?? null))
    );
    cargs.push(
        "-surf_A",
        (params["surf_A"] ?? null)
    );
    if ((params["surf_B"] ?? null) !== null) {
        cargs.push(
            "-surf_B",
            (params["surf_B"] ?? null)
        );
    }
    if ((params["out_1D"] ?? null) !== null) {
        cargs.push(
            "-out_1D",
            (params["out_1D"] ?? null)
        );
    }
    cargs.push(
        "-out",
        (params["out_dset"] ?? null)
    );
    if ((params["func"] ?? null) !== null) {
        cargs.push(
            "-func",
            ...(params["func"] ?? null)
        );
    }
    if ((params["surf_volume"] ?? null) !== null) {
        cargs.push(
            "-sv",
            execution.inputFile((params["surf_volume"] ?? null))
        );
    }
    if ((params["cmask"] ?? null) !== null) {
        cargs.push(
            "-cmask",
            (params["cmask"] ?? null)
        );
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    if ((params["dnode"] ?? null) !== null) {
        cargs.push(
            "-dnode",
            String((params["dnode"] ?? null))
        );
    }
    if ((params["nodes_1D"] ?? null) !== null) {
        cargs.push(
            "-nodes_1D",
            execution.inputFile((params["nodes_1D"] ?? null))
        );
    }
    if ((params["info_all"] ?? null)) {
        cargs.push("-info_all");
    }
    if ((params["info_area"] ?? null)) {
        cargs.push("-info_area");
    }
    if ((params["info_norms"] ?? null)) {
        cargs.push("-info_norms");
    }
    if ((params["info_thick"] ?? null)) {
        cargs.push("-info_thick");
    }
    if ((params["info_vol"] ?? null)) {
        cargs.push("-info_vol");
    }
    if ((params["info_volg"] ?? null)) {
        cargs.push("-info_volg");
    }
    if ((params["ver"] ?? null)) {
        cargs.push("-ver");
    }
    return cargs;
}


function surf_measures_outputs(
    params: SurfMeasuresParameters,
    execution: Execution,
): SurfMeasuresOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfMeasuresOutputs = {
        root: execution.outputFile("."),
        output_1_d: ((params["out_1D"] ?? null) !== null) ? execution.outputFile([(params["out_1D"] ?? null), ".1D"].join('')) : null,
        output_dset: execution.outputFile([(params["out_dset"] ?? null)].join('')),
    };
    return ret;
}


function surf_measures_execute(
    params: SurfMeasuresParameters,
    execution: Execution,
): SurfMeasuresOutputs {
    /**
     * Compute measures from surface dataset(s).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfMeasuresOutputs`).
     */
    params = execution.params(params)
    const cargs = surf_measures_cargs(params, execution)
    const ret = surf_measures_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surf_measures(
    spec_file: InputPathType,
    surf_a: string,
    out_dset: string,
    surf_b: string | null = null,
    out_1_d: string | null = null,
    func: Array<string> | null = null,
    surf_volume: InputPathType | null = null,
    cmask: string | null = null,
    debug: number | null = null,
    dnode: number | null = null,
    nodes_1_d: InputPathType | null = null,
    info_all: boolean = false,
    info_area: boolean = false,
    info_norms: boolean = false,
    info_thick: boolean = false,
    info_vol: boolean = false,
    info_volg: boolean = false,
    ver: boolean = false,
    runner: Runner | null = null,
): SurfMeasuresOutputs {
    /**
     * Compute measures from surface dataset(s).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param spec_file SUMA spec file containing a list of related surfaces
     * @param surf_a Surface name (in spec file) for the first surface
     * @param out_dset Output filename with dataset format
     * @param surf_b Surface name (in spec file) for the second surface
     * @param out_1_d Output filename in 1D format
     * @param func Measure function to be applied
     * @param surf_volume AFNI volume dataset associated with the surface
     * @param cmask Restrict nodes with a mask
     * @param debug Display extra run-time information with specified debug level (0-5)
     * @param dnode Display extra information for specified node
     * @param nodes_1_d Restrict output to specific nodes listed in a file
     * @param info_all Display all final info
     * @param info_area Display total area of each triangulated surface
     * @param info_norms Display info about the normals
     * @param info_thick Display minimum and maximum thickness between surfaces
     * @param info_vol Display total computed volume between surfaces
     * @param info_volg Display total computed volume estimated via Gauss' theorem
     * @param ver Show program version and compile date
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfMeasuresOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURF_MEASURES_METADATA);
    const params = surf_measures_params(spec_file, surf_a, out_dset, surf_b, out_1_d, func, surf_volume, cmask, debug, dnode, nodes_1_d, info_all, info_area, info_norms, info_thick, info_vol, info_volg, ver)
    return surf_measures_execute(params, execution);
}


export {
      SURF_MEASURES_METADATA,
      SurfMeasuresOutputs,
      SurfMeasuresParameters,
      surf_measures,
      surf_measures_params,
};
