// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVEX_HULL_METADATA: Metadata = {
    id: "212679c3e56974a08070cda35b98c1c96c0bfe04.boutiques",
    name: "ConvexHull",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ConvexHullParameters {
    "__STYXTYPE__": "ConvexHull";
    "vol"?: InputPathType | null | undefined;
    "isoval"?: number | null | undefined;
    "isorange"?: Array<number> | null | undefined;
    "isocmask"?: string | null | undefined;
    "xform"?: string | null | undefined;
    "surface_input"?: InputPathType | null | undefined;
    "surf_vol"?: InputPathType | null | undefined;
    "input_1d"?: InputPathType | null | undefined;
    "q_opt"?: string | null | undefined;
    "proj_xy": boolean;
    "orig_coord": boolean;
    "these_coords"?: InputPathType | null | undefined;
    "output_prefix"?: string | null | undefined;
    "debug"?: string | null | undefined;
    "novolreg": boolean;
    "setenv"?: string | null | undefined;
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
        "ConvexHull": convex_hull_cargs,
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
        "ConvexHull": convex_hull_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `convex_hull(...)`.
 *
 * @interface
 */
interface ConvexHullOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output surface file
     */
    out_surf: OutputPathType | null;
}


function convex_hull_params(
    vol: InputPathType | null = null,
    isoval: number | null = null,
    isorange: Array<number> | null = null,
    isocmask: string | null = null,
    xform: string | null = null,
    surface_input: InputPathType | null = null,
    surf_vol: InputPathType | null = null,
    input_1d: InputPathType | null = null,
    q_opt: string | null = null,
    proj_xy: boolean = false,
    orig_coord: boolean = false,
    these_coords: InputPathType | null = null,
    output_prefix: string | null = null,
    debug: string | null = null,
    novolreg: boolean = false,
    setenv: string | null = null,
): ConvexHullParameters {
    /**
     * Build parameters.
    
     * @param vol Input AFNI (or AFNI readable) volume.
     * @param isoval Create isosurface where volume = V
     * @param isorange Create isosurface where V0 <= volume < V1
     * @param isocmask Create isosurface where MASK_COM != 0. Example: -isocmask '-a VOL+orig -expr (1-bool(a-V))' is equivalent to using -isoval V. NOTE: Allowed only with -xform mask
     * @param xform Transform to apply to volume values before searching for sign change boundary. Options: mask, shift, none
     * @param surface_input Input surface type
     * @param surf_vol Specify a surface volume which contains a transform to apply to the surface node coordinates
     * @param input_1d Construct the triangulation of the points contained in 1D file XYZ. Use AFNI's [] selectors to specify the XYZ columns.
     * @param q_opt Meshing option OPT. Options: convex_hull, triangulate_xy
     * @param proj_xy Project points onto plane whose normal is the third principal component. Then rotate projection so that plane is parallel to Z = constant.
     * @param orig_coord Use original coordinates when writing surface, not transformed ones.
     * @param these_coords Use coordinates in COORDS.1D when writing surface.
     * @param output_prefix Prefix of output surface. Specifies the format and prefix of the surface.
     * @param debug Debugging level.
     * @param novolreg Ignore any Rotate, Volreg, Tagalign, or WarpDrive transformations present in the Surface Volume.
     * @param setenv Set environment variable ENVname to be ENVvalue.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ConvexHull" as const,
        "proj_xy": proj_xy,
        "orig_coord": orig_coord,
        "novolreg": novolreg,
    };
    if (vol !== null) {
        params["vol"] = vol;
    }
    if (isoval !== null) {
        params["isoval"] = isoval;
    }
    if (isorange !== null) {
        params["isorange"] = isorange;
    }
    if (isocmask !== null) {
        params["isocmask"] = isocmask;
    }
    if (xform !== null) {
        params["xform"] = xform;
    }
    if (surface_input !== null) {
        params["surface_input"] = surface_input;
    }
    if (surf_vol !== null) {
        params["surf_vol"] = surf_vol;
    }
    if (input_1d !== null) {
        params["input_1d"] = input_1d;
    }
    if (q_opt !== null) {
        params["q_opt"] = q_opt;
    }
    if (these_coords !== null) {
        params["these_coords"] = these_coords;
    }
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (debug !== null) {
        params["debug"] = debug;
    }
    if (setenv !== null) {
        params["setenv"] = setenv;
    }
    return params;
}


function convex_hull_cargs(
    params: ConvexHullParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ConvexHull");
    if ((params["vol"] ?? null) !== null) {
        cargs.push(
            "-input",
            execution.inputFile((params["vol"] ?? null))
        );
    }
    if ((params["isoval"] ?? null) !== null) {
        cargs.push(
            "-isoval",
            String((params["isoval"] ?? null))
        );
    }
    if ((params["isorange"] ?? null) !== null) {
        cargs.push(
            "-isorange",
            ...(params["isorange"] ?? null).map(String)
        );
    }
    if ((params["isocmask"] ?? null) !== null) {
        cargs.push(
            "-isocmask",
            (params["isocmask"] ?? null)
        );
    }
    if ((params["xform"] ?? null) !== null) {
        cargs.push(
            "-xform",
            (params["xform"] ?? null)
        );
    }
    if ((params["surface_input"] ?? null) !== null) {
        cargs.push(
            "-i_TYPE",
            execution.inputFile((params["surface_input"] ?? null))
        );
    }
    if ((params["surf_vol"] ?? null) !== null) {
        cargs.push(
            "-sv",
            execution.inputFile((params["surf_vol"] ?? null))
        );
    }
    if ((params["input_1d"] ?? null) !== null) {
        cargs.push(
            "-input_1D",
            execution.inputFile((params["input_1d"] ?? null))
        );
    }
    if ((params["q_opt"] ?? null) !== null) {
        cargs.push(
            "-q_opt",
            (params["q_opt"] ?? null)
        );
    }
    if ((params["proj_xy"] ?? null)) {
        cargs.push("-proj_xy");
    }
    if ((params["orig_coord"] ?? null)) {
        cargs.push("-orig_coord");
    }
    if ((params["these_coords"] ?? null) !== null) {
        cargs.push(
            "-these_coords",
            execution.inputFile((params["these_coords"] ?? null))
        );
    }
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-o_TYPE",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            (params["debug"] ?? null)
        );
    }
    if ((params["novolreg"] ?? null)) {
        cargs.push("-novolreg");
    }
    if ((params["setenv"] ?? null) !== null) {
        cargs.push(
            "-setenv",
            (params["setenv"] ?? null)
        );
    }
    return cargs;
}


function convex_hull_outputs(
    params: ConvexHullParameters,
    execution: Execution,
): ConvexHullOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvexHullOutputs = {
        root: execution.outputFile("."),
        out_surf: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null)].join('')) : null,
    };
    return ret;
}


function convex_hull_execute(
    params: ConvexHullParameters,
    execution: Execution,
): ConvexHullOutputs {
    /**
     * A program to find the convex hull, or perform a Delaunay triangulation of a set of points.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvexHullOutputs`).
     */
    params = execution.params(params)
    const cargs = convex_hull_cargs(params, execution)
    const ret = convex_hull_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convex_hull(
    vol: InputPathType | null = null,
    isoval: number | null = null,
    isorange: Array<number> | null = null,
    isocmask: string | null = null,
    xform: string | null = null,
    surface_input: InputPathType | null = null,
    surf_vol: InputPathType | null = null,
    input_1d: InputPathType | null = null,
    q_opt: string | null = null,
    proj_xy: boolean = false,
    orig_coord: boolean = false,
    these_coords: InputPathType | null = null,
    output_prefix: string | null = null,
    debug: string | null = null,
    novolreg: boolean = false,
    setenv: string | null = null,
    runner: Runner | null = null,
): ConvexHullOutputs {
    /**
     * A program to find the convex hull, or perform a Delaunay triangulation of a set of points.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param vol Input AFNI (or AFNI readable) volume.
     * @param isoval Create isosurface where volume = V
     * @param isorange Create isosurface where V0 <= volume < V1
     * @param isocmask Create isosurface where MASK_COM != 0. Example: -isocmask '-a VOL+orig -expr (1-bool(a-V))' is equivalent to using -isoval V. NOTE: Allowed only with -xform mask
     * @param xform Transform to apply to volume values before searching for sign change boundary. Options: mask, shift, none
     * @param surface_input Input surface type
     * @param surf_vol Specify a surface volume which contains a transform to apply to the surface node coordinates
     * @param input_1d Construct the triangulation of the points contained in 1D file XYZ. Use AFNI's [] selectors to specify the XYZ columns.
     * @param q_opt Meshing option OPT. Options: convex_hull, triangulate_xy
     * @param proj_xy Project points onto plane whose normal is the third principal component. Then rotate projection so that plane is parallel to Z = constant.
     * @param orig_coord Use original coordinates when writing surface, not transformed ones.
     * @param these_coords Use coordinates in COORDS.1D when writing surface.
     * @param output_prefix Prefix of output surface. Specifies the format and prefix of the surface.
     * @param debug Debugging level.
     * @param novolreg Ignore any Rotate, Volreg, Tagalign, or WarpDrive transformations present in the Surface Volume.
     * @param setenv Set environment variable ENVname to be ENVvalue.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvexHullOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVEX_HULL_METADATA);
    const params = convex_hull_params(vol, isoval, isorange, isocmask, xform, surface_input, surf_vol, input_1d, q_opt, proj_xy, orig_coord, these_coords, output_prefix, debug, novolreg, setenv)
    return convex_hull_execute(params, execution);
}


export {
      CONVEX_HULL_METADATA,
      ConvexHullOutputs,
      ConvexHullParameters,
      convex_hull,
      convex_hull_params,
};
